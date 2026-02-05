
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

  // 4. 리셋 로직: 모든 가리개를 즉시 다시 덮음 (confirm 제거)
  const handleReset = () => {
    if (!currentEpId || !subtitleData.length) return;
    
    const resetMatrix = createInitialStateForEpisode(subtitleData);
    
    // 1. 상태 업데이트
    setRevealedStates(prev => {
      const next = { ...prev, [currentEpId]: resetMatrix };
      // 2. 로컬 스토리지 즉시 동기화
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ revealedStates: next }));
      return next;
    });

    // 3. UI 강제 리프레시 (key 변경으로 컴포넌트 재마운트 유도)
    setRefreshKey(prev => prev + 1);
    
    // 4. 최상단 이동
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
  };

  const findNextHidden = useCallback(() => {
    for (let i = 0; i < currentStates.length; i++) {
      const hiddenIdx = currentStates[i].findIndex(v => !v);
      if (hiddenIdx !== -1) return { sIdx: i, wIdx: hiddenIdx };
    }
    return null;
  }, [currentStates]);

  const handleRevealNext = () => {
    const next = findNextHidden();
    if (next) {
      toggleWord(next.sIdx, next.wIdx);
      setTimeout(() => {
        sentenceRefs.current[next.sIdx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    } else {
      alert("축하합니다! 모든 단어를 확인하셨습니다. 🎉");
    }
  };

  // --- 홈 화면 ---
  if (view === 'home') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
        <header className="w-full max-w-md pt-24 pb-16 text-center">
          <div className="bg-indigo-600 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-indigo-100 -rotate-2">
            <BookOpen size={48} className="text-white" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tighter mb-4 uppercase">Word Masker</h1>
          <div className="h-1.5 w-12 bg-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 font-semibold text-lg italic tracking-tight">Master every single word</p>
        </header>

        <main className="w-full max-w-md grid gap-5">
          {EPISODES.map((ep) => (
            <button
              key={ep.id}
              onClick={() => selectEpisode(ep)}
              className="group relative w-full bg-white hover:bg-indigo-600 p-8 rounded-[2.5rem] transition-all duration-300 flex items-center gap-6 active:scale-[0.97] text-left shadow-lg shadow-gray-200/50 border border-transparent hover:border-indigo-500"
            >
              <div className="bg-indigo-50 group-hover:bg-indigo-500 w-16 h-16 rounded-3xl flex items-center justify-center group-hover:text-white text-indigo-600 transition-colors shadow-inner">
                <PlayCircle size={32} />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-black group-hover:text-indigo-200 text-indigo-500 uppercase tracking-[0.2em] block mb-2">
                  {ep.id}
                </span>
                <h2 className="text-2xl font-black group-hover:text-white text-gray-900 leading-tight">
                  {ep.name}
                </h2>
              </div>
              <ChevronRight className="text-gray-200 group-hover:text-white group-hover:translate-x-1 transition-all" size={24} />
            </button>
          ))}
        </main>

        {loading && (
          <div className="fixed inset-0 bg-white/90 backdrop-blur-xl flex flex-col items-center justify-center z-50">
            <Loader2 className="animate-spin text-indigo-600 mb-6" size={60} strokeWidth={3} />
            <p className="font-black text-indigo-900 text-xl tracking-widest animate-pulse">PREPARING EPISODE...</p>
          </div>
        )}
      </div>
    );
  }

  // --- 학습 화면 ---
  const activeEp = EPISODES.find(e => e.id === currentEpId);
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-2xl mx-auto shadow-2xl relative border-x border-gray-100">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-3xl border-b border-gray-100 px-6 py-6 flex items-center justify-between">
        <button 
          onClick={() => setView('home')}
          className="w-12 h-12 flex items-center justify-center bg-gray-50 hover:bg-gray-200 rounded-2xl transition-all text-gray-500 active:scale-90"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="text-center overflow-hidden">
          <span className="text-[10px] font-black text-indigo-600 uppercase block tracking-[0.3em] mb-1">{currentEpId}</span>
          <h1 className="text-sm font-black text-gray-900 uppercase truncate max-w-[220px]">{activeEp?.name}</h1>
        </div>
        <div className="w-12"></div>
      </header>

      {/* 리프레시 키를 이용해 리셋 시 전체 컨텐츠를 강제 재렌더링 */}
      <main key={refreshKey} className="flex-1 p-6 space-y-8 pb-48">
        {subtitleData.map((item, sIdx) => {
          const words = item.Subtitle.trim().split(/\s+/).filter(Boolean);
          const stateRow = currentStates[sIdx] || [];
          const isDone = stateRow.length > 0 && stateRow.every(v => v);
          const nextTarget = findNextHidden();
          const isActive = nextTarget?.sIdx === sIdx;

          return (
            <section
              key={`${currentEpId}-${sIdx}`}
              ref={el => { sentenceRefs.current[sIdx] = el; }}
              className={`p-10 rounded-[4rem] border-4 transition-all duration-500 ${
                isActive 
                  ? 'bg-white border-indigo-600 ring-[12px] ring-indigo-50 shadow-3xl' 
                  : isDone 
                  ? 'bg-white border-green-100 opacity-60 grayscale-[0.5]' 
                  : 'bg-white border-transparent shadow-xl shadow-gray-200/40'
              }`}
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-4">
                  <span className={`text-[11px] font-black px-4 py-1.5 rounded-full tracking-wider ${
                    isActive ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {item.Time}
                  </span>
                  {isDone && <CheckCircle2 size={20} className="text-green-500" />}
                </div>
                <button 
                  onClick={() => toggleSentence(sIdx)}
                  className={`p-3 rounded-3xl transition-all active:scale-90 ${
                    isDone ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-50 text-gray-300 hover:text-indigo-400 hover:bg-indigo-50'
                  }`}
                  title="Reveal/Mask whole sentence"
                >
                  {isDone ? <Eye size={24} /> : <EyeOff size={24} />}
                </button>
              </div>

              <div className="flex flex-wrap gap-x-3 gap-y-5 mb-10">
                {words.map((word, wIdx) => {
                  const isRevealed = stateRow[wIdx];
                  return (
                    <button
                      key={wIdx}
                      onClick={() => toggleWord(sIdx, wIdx)}
                      className={`px-5 py-2 text-3xl font-black rounded-[1.2rem] transition-all duration-300 ${
                        isRevealed 
                          ? 'text-gray-900 bg-gray-100' 
                          : 'text-transparent bg-indigo-600 shadow-xl shadow-indigo-200 active:scale-90 active:rotate-2'
                      }`}
                    >
                      {word}
                    </button>
                  );
                })}
              </div>

              <div className="text-xl font-bold text-gray-400 border-t border-gray-100 pt-10 leading-relaxed">
                {item["Human Translation"]}
              </div>
            </section>
          );
        })}

        {/* 리셋 버튼: 리스트의 가장 마지막에 큼직하게 배치 */}
        <div className="py-24 flex flex-col items-center gap-6 border-t-2 border-dashed border-gray-200 mt-12">
          <p className="text-gray-400 font-bold text-sm">Want to try this episode again?</p>
          <button 
            onClick={handleReset}
            className="group flex items-center gap-4 text-white bg-red-500 hover:bg-red-600 font-black text-sm uppercase tracking-[0.2em] py-6 px-12 rounded-[2.5rem] shadow-2xl shadow-red-200 transition-all active:scale-95"
          >
            <RotateCcw size={20} className="group-hover:-rotate-180 transition-transform duration-700" />
            Reset & Re-mask Everything
          </button>
        </div>
      </main>

      {/* 하단Reveal 버튼 */}
      <footer className="fixed bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-gray-50 via-gray-50/95 to-transparent z-40 flex justify-center">
        <button
          onClick={handleRevealNext}
          className="w-full max-w-md bg-gray-900 hover:bg-black active:scale-[0.98] transition-all text-white py-7 rounded-[2.5rem] font-black text-2xl shadow-3xl flex items-center justify-center gap-4"
        >
          <span>REVEAL NEXT WORD</span>
          <ChevronRight size={28} strokeWidth={4} className="text-indigo-500" />
        </button>
      </footer>
    </div>
  );
};

export default App;
