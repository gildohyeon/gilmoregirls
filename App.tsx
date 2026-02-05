
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { EPISODES } from './data';
import { SubtitleItem, EpisodeMetadata } from './types';
import { Eye, EyeOff, RotateCcw, ChevronRight, BookOpen, CheckCircle2, Loader2, ArrowLeft, PlayCircle } from 'lucide-react';

const STORAGE_KEY = 'word_masker_v9_storage';

// 유틸리티: 문장을 단어 단위 가리개 상태(false = 가림)로 변환
const createInitialStateForEpisode = (data: SubtitleItem[]) => {
  return data.map(item => 
    item.Subtitle.trim().split(/\s+/).filter(Boolean).map(() => false)
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'study'>('home');
  const [currentEpId, setCurrentEpId] = useState<string | null>(null);
  const [subtitleData, setSubtitleData] = useState<SubtitleItem[]>([]);
  const [revealedStates, setRevealedStates] = useState<Record<string, boolean[][]>>({});
  const [loading, setLoading] = useState(false);
  
  // 현재 포커스된 문장 인덱스 (스크롤 및 가이드용)
  const [focusedSentenceIdx, setFocusedSentenceIdx] = useState(0);
  
  // 리셋 시 UI를 강제로 새로고침하기 위한 키
  const [refreshKey, setRefreshKey] = useState(0);
  
  const sentenceRefs = useRef<(HTMLElement | null)[]>([]);

  // 1. 초기 로드: 로컬 스토리지 복구
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.revealedStates) setRevealedStates(parsed.revealedStates);
      } catch (e) {
        console.error("Storage load error", e);
      }
    }
  }, []);

  // 2. 상태 변경 시 자동 저장
  useEffect(() => {
    if (Object.keys(revealedStates).length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ revealedStates }));
    }
  }, [revealedStates]);

  // 3. 에피소드 선택 (지연 로딩)
  const selectEpisode = (ep: EpisodeMetadata) => {
    setLoading(true);
    setCurrentEpId(ep.id);
    setSubtitleData(ep.data);
    setFocusedSentenceIdx(0); // 포커스 초기화
    
    // 이 에피소드에 대한 상태가 없으면 초기화(모두 가림)
    if (!revealedStates[ep.id]) {
      const initialState = createInitialStateForEpisode(ep.data);
      setRevealedStates(prev => ({
        ...prev,
        [ep.id]: initialState
      }));
    }

    setTimeout(() => {
      setView('study');
      setLoading(false);
      window.scrollTo(0, 0);
    }, 400);
  };

  const currentStates = currentEpId ? (revealedStates[currentEpId] || []) : [];

  // 4. 리셋 로직
  const handleReset = () => {
    if (!currentEpId || !subtitleData.length) return;
    
    const resetMatrix = createInitialStateForEpisode(subtitleData);
    
    setRevealedStates(prev => {
      const next = { ...prev, [currentEpId]: resetMatrix };
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ revealedStates: next }));
      return next;
    });

    setFocusedSentenceIdx(0);
    setRefreshKey(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleWord = (sIdx: number, wIdx: number) => {
    if (!currentEpId) return;
    setRevealedStates(prev => {
      const epState = (prev[currentEpId] || []).map(row => [...row]);
      if (epState[sIdx]) {
        epState[sIdx][wIdx] = !epState[sIdx][wIdx];
      }
      return { ...prev, [currentEpId]: epState };
    });
    // 단어를 수동으로 클릭하면 해당 문장으로 포커스 이동
    setFocusedSentenceIdx(sIdx);
  };

  const toggleSentence = (sIdx: number) => {
    if (!currentEpId) return;
    setRevealedStates(prev => {
      const epState = (prev[currentEpId] || []).map(row => [...row]);
      if (epState[sIdx]) {
        const isCurrentlyAllOpen = epState[sIdx].every(v => v);
        epState[sIdx] = epState[sIdx].map(() => !isCurrentlyAllOpen);
      }
      return { ...prev, [currentEpId]: epState };
    });
    setFocusedSentenceIdx(sIdx);
  };

  const findNextHidden = useCallback(() => {
    for (let i = 0; i < currentStates.length; i++) {
      const hiddenIdx = currentStates[i].findIndex(v => !v);
      if (hiddenIdx !== -1) return { sIdx: i, wIdx: hiddenIdx };
    }
    return null;
  }, [currentStates]);

  // 넥스트 버튼 로직 수정
  const handleRevealNext = () => {
    const next = findNextHidden();
    
    if (!next) {
      alert("축하합니다! 모든 단어를 확인하셨습니다. 🎉");
      return;
    }

    // 1. 현재 포커스된 문장이 이미 끝났거나, 다음 숨겨진 단어가 다음 문장에 있는 경우
    if (next.sIdx > focusedSentenceIdx) {
      // 다음 문장으로 화면만 이동 (단어는 아직 공개하지 않음)
      setFocusedSentenceIdx(next.sIdx);
      setTimeout(() => {
        sentenceRefs.current[next.sIdx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    } else {
      // 2. 현재 포커스된 문장 내에 숨겨진 단어가 있는 경우 -> 단어 공개
      toggleWord(next.sIdx, next.wIdx);
      setTimeout(() => {
        sentenceRefs.current[next.sIdx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    }
  };

  // --- 홈 화면 ---
  if (view === 'home') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
        <header className="w-full max-w-md pt-16 pb-10 text-center">
          <div className="bg-indigo-600 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-100">
            <BookOpen size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tighter mb-2 uppercase">Word Masker</h1>
          <p className="text-gray-400 font-semibold text-sm italic tracking-tight">Master every single word</p>
        </header>

        <main className="w-full max-w-md grid gap-4">
          {EPISODES.map((ep) => (
            <button
              key={ep.id}
              onClick={() => selectEpisode(ep)}
              className="group w-full bg-white hover:bg-indigo-600 p-6 rounded-3xl transition-all duration-300 flex items-center gap-4 active:scale-[0.98] text-left shadow-md border border-gray-100 hover:border-indigo-500"
            >
              <div className="bg-indigo-50 group-hover:bg-indigo-500 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:text-white text-indigo-600 transition-colors">
                <PlayCircle size={24} />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-black group-hover:text-indigo-200 text-indigo-500 uppercase tracking-widest block">
                  {ep.id}
                </span>
                <h2 className="text-lg font-black group-hover:text-white text-gray-900 leading-tight">
                  {ep.name}
                </h2>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-white transition-all" size={20} />
            </button>
          ))}
        </main>

        {loading && (
          <div className="fixed inset-0 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center z-50">
            <Loader2 className="animate-spin text-indigo-600 mb-4" size={48} strokeWidth={3} />
            <p className="font-bold text-indigo-900 tracking-widest text-sm uppercase">Loading...</p>
          </div>
        )}
      </div>
    );
  }

  // --- 학습 화면 ---
  const activeEp = EPISODES.find(e => e.id === currentEpId);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-2xl mx-auto shadow-xl relative border-x border-gray-100">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-4 py-4 flex items-center justify-between">
        <button 
          onClick={() => setView('home')}
          className="w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-200 rounded-xl transition-all text-gray-500"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="text-center overflow-hidden flex-1 px-4">
          <span className="text-[9px] font-black text-indigo-600 uppercase block tracking-widest">{currentEpId}</span>
          <h1 className="text-xs font-black text-gray-900 uppercase truncate">{activeEp?.name}</h1>
        </div>
        <button 
          onClick={handleReset}
          className="w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-red-50 hover:text-red-500 rounded-xl transition-all text-gray-400"
          title="Reset"
        >
          <RotateCcw size={18} />
        </button>
      </header>

      <main key={refreshKey} className="flex-1 p-4 space-y-4 pb-32">
        {subtitleData.map((item, sIdx) => {
          const words = item.Subtitle.trim().split(/\s+/).filter(Boolean);
          const stateRow = currentStates[sIdx] || [];
          const isDone = stateRow.length > 0 && stateRow.every(v => v);
          const isActive = focusedSentenceIdx === sIdx;

          return (
            <section
              key={`${currentEpId}-${sIdx}`}
              ref={el => { sentenceRefs.current[sIdx] = el; }}
              className={`p-5 rounded-2xl border-2 transition-all duration-300 ${
                isActive 
                  ? 'bg-white border-indigo-500 ring-4 ring-indigo-50 shadow-lg' 
                  : isDone 
                  ? 'bg-gray-50 border-transparent opacity-70' 
                  : 'bg-white border-transparent shadow-sm'
              }`}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md tracking-tight ${
                    isActive ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {item.Time}
                  </span>
                  {isDone && <CheckCircle2 size={14} className="text-green-500" />}
                </div>
                <button 
                  onClick={() => toggleSentence(sIdx)}
                  className={`p-1.5 rounded-lg transition-all ${
                    isDone ? 'text-indigo-600' : 'text-gray-300 hover:text-indigo-400'
                  }`}
                >
                  {isDone ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>

              <div className="flex flex-wrap gap-x-2 gap-y-3 mb-4">
                {words.map((word, wIdx) => {
                  const isRevealed = stateRow[wIdx];
                  return (
                    <button
                      key={wIdx}
                      onClick={() => toggleWord(sIdx, wIdx)}
                      className={`px-3 py-1 text-lg font-bold rounded-xl transition-all duration-200 ${
                        isRevealed 
                          ? 'text-gray-900 bg-gray-100' 
                          : 'text-transparent bg-indigo-600 shadow-md active:scale-95'
                      }`}
                    >
                      {word}
                    </button>
                  );
                })}
              </div>

              <div className="text-base font-medium text-gray-500 border-t border-gray-100 pt-3 leading-snug">
                {item["Human Translation"]}
              </div>
            </section>
          );
        })}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent z-40 flex justify-center">
        <button
          onClick={handleRevealNext}
          className="w-full max-w-md bg-gray-900 hover:bg-black active:scale-[0.98] transition-all text-white py-4 rounded-2xl font-black text-lg shadow-xl flex items-center justify-center gap-3"
        >
          <span>REVEAL NEXT</span>
          <ChevronRight size={20} strokeWidth={3} className="text-indigo-400" />
        </button>
      </footer>
    </div>
  );
};

export default App;
