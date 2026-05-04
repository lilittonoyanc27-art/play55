import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Anchor, 
  Ship, 
  Gem, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RotateCcw, 
  ArrowLeft, 
  Trophy, 
  Info,
  Waves,
  Sword,
  Search,
  BookOpen,
  MessageSquareX
} from 'lucide-react';
import { POR_PARA_QUESTIONS, TENER_QUESTIONS, HAY_QUESTIONS, NEGATION_QUESTIONS, Question } from './constants';

type GameType = 'menu' | 'por_para' | 'tener' | 'hay' | 'negation';
type GameStatus = 'playing' | 'results';

export default function App() {
  const [activeGame, setActiveGame] = useState<GameType>('menu');
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestions = activeGame === 'por_para' ? POR_PARA_QUESTIONS : 
                          activeGame === 'tener' ? TENER_QUESTIONS : 
                          activeGame === 'hay' ? HAY_QUESTIONS :
                          NEGATION_QUESTIONS;

  const handleGameSelect = (game: GameType) => {
    setActiveGame(game);
    setGameStatus('playing');
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const handleOptionSelect = (option: string) => {
    if (selectedOption) return;
    setSelectedOption(option);
    if (option === currentQuestions[currentIndex].correct) {
      setScore(s => s + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setGameStatus('results');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-200 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {activeGame === 'menu' && (
          <motion.div 
            key="menu"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="min-h-screen flex flex-col items-center justify-center p-6 space-y-12"
          >
            <div className="text-center space-y-4">
               <motion.div 
                 animate={{ rotate: [-2, 2, -2] }}
                 transition={{ repeat: Infinity, duration: 4 }}
                 className="inline-block bg-sky-600 p-4 rounded-3xl text-white shadow-2xl mb-4"
               >
                  <BookOpen size={64} />
               </motion.div>
               <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-slate-900">
                 ԻՍՊԱՆԵՐԵՆԻ <span className="text-sky-600">ԱԿԱԴԵՄԻԱ</span>
               </h1>
               <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-xs md:text-sm">
                 SPANISH MASTERY ADVENTURE • 4 GAMES
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
               <MenuButton 
                 title="Por vs Para" 
                 desc="Մաստեր Կլաս" 
                 icon={<Compass size={32} className="text-orange-500" />} 
                 color="orange"
                 onClick={() => handleGameSelect('por_para')} 
               />
               <MenuButton 
                 title="Tener" 
                 desc="Ծովային Մարտ" 
                 icon={<Ship size={32} className="text-blue-500" />} 
                 color="blue"
                 onClick={() => handleGameSelect('tener')} 
               />
               <MenuButton 
                 title="Hay" 
                 desc="Գանձերի Որոնում" 
                 icon={<Gem size={32} className="text-emerald-500" />} 
                 color="emerald"
                 onClick={() => handleGameSelect('hay')} 
               />
               <MenuButton 
                 title="Negación" 
                 desc="Ժխտման Հայելի" 
                 icon={<MessageSquareX size={32} className="text-rose-500" />} 
                 color="rose"
                 onClick={() => handleGameSelect('negation')} 
               />
            </div>
          </motion.div>
        )}

        {activeGame !== 'menu' && gameStatus === 'playing' && (
          <motion.div 
            key="game"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className={`min-h-screen flex flex-col p-4 md:p-8 ${getBgColor(activeGame)}`}
          >
            {/* Game Header */}
            <div className="max-w-4xl mx-auto w-full flex items-center justify-between mb-8">
               <button 
                onClick={() => setActiveGame('menu')}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm font-black text-xs tracking-widest uppercase hover:scale-105 transition-all"
               >
                 <ArrowLeft size={16} /> ՄԵՆՅՈՒ
               </button>
               <div className="flex items-center gap-4">
                  <div className="h-3 w-32 md:w-64 bg-slate-200/50 backdrop-blur rounded-full overflow-hidden border border-white/20">
                     <motion.div 
                       className={`h-full ${getAccentColor(activeGame)}`}
                       initial={{ width: 0 }}
                       animate={{ width: `${((currentIndex + 1) / currentQuestions.length) * 100}%` }}
                     />
                  </div>
                  <span className="font-black text-xs text-slate-500">{currentIndex + 1} / {currentQuestions.length}</span>
               </div>
            </div>

            {/* Main Game Container */}
            <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
               {/* Visual Element for Themes */}
               <ThemeVisual activeGame={activeGame} progress={score} />

               {/* Question Card */}
               <motion.div 
                 key={currentIndex}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="bg-white/80 backdrop-blur-xl p-8 md:p-14 rounded-[3.5rem] shadow-2xl border-8 border-white flex flex-col gap-10"
               >
                  <div className="space-y-4">
                     <p className="text-slate-400 font-bold italic text-lg md:text-xl">Իսպաներեն:</p>
                     <h3 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight whitespace-pre-line">
                        {currentQuestions[currentIndex].sentence.split('___').map((part, i, arr) => (
                           <React.Fragment key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                 <span className={`inline-block min-w-[3ch] border-b-8 px-2 mx-1 transition-all ${selectedOption ? 'border-transparent text-sky-600' : 'border-sky-100 text-transparent'}`}>
                                    {selectedOption || '___'}
                                 </span>
                              )}
                           </React.Fragment>
                        ))}
                     </h3>
                     <p className="text-lg md:text-xl font-bold text-slate-400 pt-6 border-t-2 border-slate-50/50 italic">
                        {currentQuestions[currentIndex].translation}
                     </p>
                  </div>

                  <div className={`grid ${activeGame === 'por_para' ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'} gap-4`}>
                     {currentQuestions[currentIndex].options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleOptionSelect(opt)}
                          disabled={!!selectedOption}
                          className={`py-6 md:py-8 rounded-[2rem] font-black text-2xl md:text-3xl uppercase tracking-widest transition-all ${
                            selectedOption === opt 
                              ? (opt === currentQuestions[currentIndex].correct ? 'bg-emerald-500 text-white shadow-[0_10px_0_#059669]' : 'bg-rose-500 text-white shadow-[0_10px_0_#e11d48]')
                              : (selectedOption ? 'bg-slate-50 text-slate-200 opacity-50' : `bg-slate-100 text-slate-400 hover:scale-[1.02] hover:bg-white hover:text-sky-600 active:translate-y-2`)
                          }`}
                        >
                          {opt}
                        </button>
                     ))}
                  </div>

                  <AnimatePresence>
                    {showExplanation && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={`p-8 md:p-10 rounded-[2.5rem] border-4 flex flex-col md:flex-row items-center gap-6 overflow-hidden ${
                          selectedOption === currentQuestions[currentIndex].correct 
                            ? 'bg-emerald-50/50 border-emerald-100 text-emerald-900' 
                            : 'bg-rose-50/50 border-rose-100 text-rose-900'
                        }`}
                      >
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                          selectedOption === currentQuestions[currentIndex].correct ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
                        }`}>
                           {selectedOption === currentQuestions[currentIndex].correct ? <CheckCircle2 /> : <XCircle />}
                        </div>
                        <div className="text-center md:text-left flex-1">
                           <p className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">ԲԱՑԱՏՐՈՒԹՅՈՒՆ</p>
                           <p className="text-lg font-bold italic">{currentQuestions[currentIndex].explanation}</p>
                        </div>
                        <button 
                          onClick={handleNext}
                          className="p-5 bg-white rounded-2xl shadow-lg border-2 border-slate-100 hover:scale-110 active:scale-95 transition-all text-slate-900"
                        >
                          <ChevronRight size={32} />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </motion.div>
            </div>
          </motion.div>
        )}

        {gameStatus === 'results' && (
           <motion.div 
             key="results"
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="min-h-screen flex flex-col items-center justify-center p-6 space-y-12"
           >
              <div className="relative">
                 <motion.div 
                   animate={{ y: [0, -20, 0], rotate: [-5, 5, -5] }}
                   transition={{ repeat: Infinity, duration: 4 }}
                   className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center shadow-3xl border-8 border-sky-100"
                 >
                    <Trophy size={140} className="text-yellow-400" />
                 </motion.div>
              </div>

              <div className="text-center space-y-4">
                 <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter text-slate-900 leading-none">
                   {score} <span className="text-slate-200">/</span> {currentQuestions.length}
                 </h2>
                 <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-xs">ՃԻՇՏ ՊԱՏԱՍԽԱՆՆԵՐ</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                 <button 
                   onClick={() => setActiveGame('menu')}
                   className="flex-1 py-8 bg-white border-4 border-slate-200 rounded-3xl font-black text-xl uppercase tracking-widest hover:border-sky-500 transition-all shadow-xl flex items-center justify-center gap-3"
                 >
                    <ArrowLeft /> ՄԵՆՅՈՒ
                 </button>
                 <button 
                   onClick={() => handleGameSelect(activeGame)}
                   className="flex-1 py-8 bg-sky-600 text-white rounded-3xl font-black text-xl uppercase tracking-widest hover:bg-sky-700 transition-all shadow-xl flex items-center justify-center gap-3 border-b-8 border-sky-800"
                 >
                    <RotateCcw /> ՆՈՐԻՑ
                 </button>
              </div>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MenuButton({ title, desc, icon, color, onClick }: { title: string, desc: string, icon: React.ReactNode, color: string, onClick: () => void }) {
  const colorMap: any = {
    orange: 'hover:border-orange-400 hover:bg-orange-50',
    blue: 'hover:border-blue-400 hover:bg-blue-50',
    emerald: 'hover:border-emerald-400 hover:bg-emerald-50',
    rose: 'hover:border-rose-400 hover:bg-rose-50'
  };

  return (
    <button 
      onClick={onClick}
      className={`p-10 bg-white rounded-[3.5rem] border-8 border-white shadow-2xl transition-all flex flex-col items-center gap-6 group hover:scale-[1.05] active:scale-95 ${colorMap[color]}`}
    >
       <div className="p-6 bg-slate-50 rounded-[2rem] shadow-inner group-hover:scale-110 transition-transform">
          {icon}
       </div>
       <div className="text-center">
          <h3 className="text-3xl font-black italic uppercase tracking-tight mb-1">{title}</h3>
          <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{desc}</p>
       </div>
    </button>
  );
}

function ThemeVisual({ activeGame, progress }: { activeGame: GameType, progress: number }) {
  if (activeGame === 'por_para') {
    return (
      <div className="flex justify-center mb-10">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
           className="text-orange-500/20"
         >
            <Compass size={120} />
         </motion.div>
      </div>
    );
  }

  if (activeGame === 'tener') {
    return (
      <div className="relative h-24 mb-10 overflow-hidden rounded-[2rem] bg-blue-100/50 shadow-inner flex items-center px-10">
         <motion.div 
           animate={{ x: [0, 400], rotate: [-2, 2, -2] }}
           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
           className="text-blue-600"
         >
            <Ship size={64} />
         </motion.div>
         <div className="absolute inset-0 flex items-center justify-around opacity-20 text-blue-300">
            <Waves size={32} />
            <Waves size={32} />
            <Waves size={32} />
            <Waves size={32} />
         </div>
      </div>
    );
  }

  if (activeGame === 'hay') {
    return (
      <div className="flex justify-center gap-4 mb-10">
         {Array.from({ length: 10 }).map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0.1 }}
              animate={{ opacity: i < progress ? 1 : 0.1, scale: i < progress ? 1.2 : 1 }}
              className={i < progress ? 'text-emerald-500' : 'text-slate-300'}
            >
               <Gem size={32} />
            </motion.div>
         ))}
      </div>
    );
  }

  if (activeGame === 'negation') {
    return (
      <div className="flex justify-center mb-10">
         <motion.div 
           animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
           transition={{ repeat: Infinity, duration: 4 }}
           className="text-rose-500"
         >
            <MessageSquareX size={120} />
         </motion.div>
      </div>
    );
  }

  return null;
}

function getBgColor(game: GameType) {
  switch (game) {
    case 'por_para': return 'bg-orange-50/50';
    case 'tener': return 'bg-blue-50/50';
    case 'hay': return 'bg-emerald-50/50';
    case 'negation': return 'bg-rose-50/50';
    default: return 'bg-slate-50';
  }
}

function getAccentColor(game: GameType) {
  switch (game) {
    case 'por_para': return 'bg-orange-500';
    case 'tener': return 'bg-blue-500';
    case 'hay': return 'bg-emerald-500';
    case 'negation': return 'bg-rose-500';
    default: return 'bg-sky-500';
  }
}
