import React, { useState, useEffect, useRef, useCallback } from 'react';
import { EPISODES, EpisodeMetadata } from './data';
import { SubtitleItem } from './types';
import { Eye, EyeOff, RotateCcw, ChevronRight, BookOpen, CheckCircle2, Loader2 } from 'lucide-react';

const STORAGE_KEY = 'word_masker_v5_storage';

const App: React.FC = () => {
  const [currentEpMeta, setCurrentEpMeta] = useState<EpisodeMetadata>(EPISODES[0]);
  const [subtitleData, setSubtitleData] = useState<SubtitleItem[]>([]);
  const [revealedStates, setRevealedStates] = useState<Record<string, boolean[][]>>({});
  const [loading, setLoading] = useState(true);
  const sentenceRefs = useRef<(HTMLElement | null)[]>([]);

  // 1. 초기 로드: 로컬 스토리지에서 진행 상태 복구
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.revealedStates) setRevealedStates(parsed.revealedStates);
        if (parsed.lastEpisodeId) {
          const lastEp = EPISODES.find(e => e.id === parsed.lastEpisodeId);
          if (lastEp) setCurrentEpMeta(lastEp);
        }
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }
  }, []);

  // 2. 에피소드 데이터 로드
  useEffect(() => {
    const loadEpisode = async () => {
      setLoading(true);
      try {
        const response = await fetch(currentEpMeta.path);
        if (!response.ok) throw new Error("JSON Fetch Failed");
        const data: SubtitleItem[] = await response.json();
        setSubtitleData(data);

        // 해당 에피소드의 가리개 데이터가 없으면 초기화(모두 가림)
        setRevealedStates(prev => {
          if (prev[currentEpMeta.id]) return prev;
          const initialState = data.map(item => 
            item.Subtitle.trim().split(/\s+/).filter(Boolean).map(() => false)
          );
          return { ...prev, [currentEpMeta.id]: initialState };
        });
      } catch (err) {
        console.error("Load error:", err);
      } finally {
        setLoading(false);
      }
    };
    loadEpisode();
  }, [currentEpMeta.id, currentEpMeta.path]);

  // 3. 상태 변경 시 자동 저장 (리셋 외의 일반적인 단어 토글 시)
  useEffect(() => {
    if (Object.keys(revealedStates).length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        lastEpisodeId: currentEpMeta.id,
        revealedStates: revealedStates
      }));
    }
  }, [revealedStates, currentEpMeta.id]);

  const currentStates = revealedStates[currentEpMeta.id] || [];

  // 리셋 버튼 로직: 해당 에피소드의 가리개를 모두 다시 덮음 (동기화 이슈 해결)
  const handleReset = () => {
    if (!subtitleData || subtitleData.length === 0) return;
    
    if (window.confirm(`[${currentEpMeta.name}] 에피소드의 모든 진행 상황을 초기화하고 다시 가리시겠습니까?`)) {
      // 1. 현재 에피소드에 대한 깨끗한 '모두 가림' 상태 배열 생성
      const resetData = subtitleData.map(item => 
        item.Subtitle.trim().split(/\s+/).filter(Boolean).map(() => false)
      );

      // 2. 상태 업데이트 (불변성 유지하며 현재 ID의 데이터만 교체)
      const nextStates = {
        ...revealedStates,
        [currentEpMeta.id]: resetData
      };
      
      setRevealedStates(nextStates);
      
      // 3. 로컬 스토리지에 즉시 강제 반영 (useEffect를 기다리지 않고 직접 저장)
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        lastEpisodeId: currentEpMeta.id,
        revealedStates: nextStates
      }));

      // 4. 화면 맨 위로 스크롤
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleWord = (sIdx: number, wIdx: number) => {
    setRevealedStates(prev => {
      const epState = (prev[currentEpMeta.id] || []).map(row => [...row]);
      if (epState[sIdx] && epState[sIdx].length > wIdx) {
        epState[sIdx][wIdx] = !epState[sIdx][wIdx];
      }
      return { ...prev, [currentEpMeta.id]: epState };
    });
  };

  const toggleSentence = (sIdx: number) => {
    setRevealedStates(prev => {
      const epState = (prev[currentEpMeta.id] || []).map(row => [...row]);
      if (epState[sIdx]) {
        const isCurrentlyAllRevealed = epState[sIdx].every(v => v);
        epState[sIdx] = epState[sIdx].map(() => !isCurrentlyAllRevealed);
      }
      return { ...prev, [currentEpMeta.id]: epState };
    });
  };

  const findNextHidden = useCallback(() => {
    if (!currentStates.length) return null;
    for (let i = 0; i < currentStates.length; i++) {
      const words = currentStates[i];
      const hiddenIdx = words.findIndex(v => !v);
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
      }, 100);
    } else {
      alert("이 에피소드의 모든 문장을 완료했습니다! 🎉");
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-indigo-600" size={48} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 pb-32 max-w-2xl mx-auto shadow-2xl relative border-x border-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-indigo-700 text-white p-4 shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen size={22} className="text-indigo-200" />
          <h1 className="text-xl font-black uppercase tracking-tight">Word Masker</h1>
        </div>
        <button 
          onClick={handleReset}
          className="flex items-center gap-1.5 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl text-xs font-black transition-all active:scale-95 shadow-md"
        >
          <RotateCcw size={14} />
          RESET
        </button>
      </header>

      {/* Episode Tabs */}
      <nav className="sticky top-[68px] z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 flex gap-2 p-3 overflow-x-auto scrollbar-hide">
        {EPISODES.map((ep) => (
          <button
            key={ep.id}
            onClick={() => {
              setCurrentEpMeta(ep);
              window.scrollTo({ top: 0 });
            }}
            className={`flex-shrink-0 px-5 py-2 rounded-full text-xs font-black transition-all ${
              currentEpMeta.id === ep.id 
                ? 'bg-indigo-600 text-white shadow-md ring-2 ring-indigo-100' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {ep.name.split(' ').pop()}
          </button>
        ))}
      </nav>

      {/* Content List */}
      <main className="flex-1 p-4 space-y-8">
        {subtitleData.map((item, sIdx) => {
          const words = item.Subtitle.trim().split(/\s+/).filter(Boolean);
          const stateRow = currentStates[sIdx] || [];
          const isDone = stateRow.length > 0 && stateRow.every(v => v);
          const nextTarget = findNextHidden();
          const isActive = nextTarget?.sIdx === sIdx;

          return (
            <section
              key={`${currentEpMeta.id}-${sIdx}`}
              ref={el => { sentenceRefs.current[sIdx] = el; }}
              className={`p-6 rounded-3xl border-2 transition-all duration-300 ${
                isActive 
                  ? 'bg-white border-indigo-400 ring-4 ring-indigo-50 shadow-2xl scale-[1.02]' 
                  : isDone 
                  ? 'bg-green-50/20 border-green-100 opacity-80' 
                  : 'bg-white border-gray-100 shadow-sm'
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <span className={`text-[11px] font-black px-2.5 py-1 rounded-lg ${
                    isActive ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {item.Time}
                  </span>
                  {isDone && <CheckCircle2 size={18} className="text-green-500" />}
                </div>
                <button 
                  onClick={() => toggleSentence(sIdx)}
                  className={`p-2 rounded-xl transition-all active:scale-90 ${
                    isDone ? 'text-indigo-600 bg-indigo-50' : 'text-gray-300 hover:text-gray-400'
                  }`}
                  aria-label="Toggle entire sentence"
                >
                  {isDone ? <Eye size={24} /> : <EyeOff size={24} />}
                </button>
              </div>

              <div className="flex flex-wrap gap-x-2 gap-y-3 mb-6">
                {words.map((word, wIdx) => {
                  const isRevealed = stateRow[wIdx];
                  return (
                    <button
                      key={wIdx}
                      onClick={() => toggleWord(sIdx, wIdx)}
                      className={`relative px-3 py-1 text-2xl font-bold select-none rounded-xl transition-all duration-200 ${
                        isRevealed 
                          ? 'text-gray-900 bg-indigo-50/50' 
                          : 'text-transparent bg-indigo-500 shadow-md active:scale-95 cursor-pointer hover:bg-indigo-600 ring-1 ring-indigo-400'
                      }`}
                    >
                      {word}
                      {!isRevealed && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/40"></span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="text-[16px] font-medium text-gray-500 border-t border-gray-50 pt-5 italic leading-relaxed">
                {item["Human Translation"]}
              </div>
            </section>
          );
        })}
      </main>

      {/* Footer Fixed Button */}
      <footer className="fixed bottom-0 left-0 right-0 p-5 bg-white/80 backdrop-blur-2xl border-t border-gray-100 z-50 flex justify-center">
        <button
          onClick={handleRevealNext}
          className="w-full max-w-2xl bg-indigo-600 active:scale-95 transition-all text-white py-5 rounded-2xl font-black text-xl shadow-2xl shadow-indigo-300 flex items-center justify-center gap-3"
        >
          <span>다음 단어 열기</span>
          <ChevronRight size={28} strokeWidth={3} className="animate-pulse" />
        </button>
      </footer>
    </div>
  );
};

export default App;