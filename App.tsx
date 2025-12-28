
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white selection:bg-[#006D6B] selection:text-white overflow-hidden">
      <style>{`
        @keyframes draw {
          from { stroke-dashoffset: 2000; }
          to { stroke-dashoffset: 0; }
        }
        .draw-text {
          stroke-dasharray: 2000;
          animation: draw 2.5s ease-in-out forwards;
        }
      `}</style>
      <div className="max-w-4xl w-full py-12 md:py-24 text-center flex flex-col items-center relative z-10">
        <header
          className={`mb-8 transition-all duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] ${mounted ? 'translate-y-0 scale-100' : 'translate-y-[35vh] scale-110'
            }`}
        >
          <div className="relative">
            <h1 className="text-8xl md:text-[14rem] font-extralight font-['Outfit'] tracking-[0.4em] uppercase text-[#006D6B] mr-[-0.4em] leading-none select-none">
              <svg className="w-full h-[1.2em] overflow-visible">
                <text
                  x="50%"
                  y="55%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`draw-text transition-all duration-500 ${mounted ? 'fill-[#006D6B] stroke-transparent' : 'fill-transparent stroke-[#006D6B]'
                    }`}
                  strokeWidth="2"
                >
                  Klar
                </text>
              </svg>
            </h1>
          </div>
        </header>

        <div className={`space-y-6 transition-all duration-1000 delay-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
          <h2 className="text-xl md:text-3xl font-extralight tracking-[0.1em] text-[#002B2A] leading-tight mt-4">
            Danish mastery, <span className="italic font-serif opacity-90 text-[#006D6B]">simplified.</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-[#5B7170] font-light leading-relaxed px-4 opacity-80">
            Master Danish with mathematical precision. Klar adapts to your unique memory patterns using the <span className="font-medium text-[#006D6B]">FSRS algorithm</span>, ensuring you never waste a second on words you already know.
          </p>
        </div>

        <div className={`flex flex-col md:flex-row items-center justify-center gap-6 mt-16 transition-all duration-1000 delay-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
          <a
            href="https://klar.rimlys.org"
            className="group flex items-center gap-4 px-10 py-4 bg-[#006D6B] text-white rounded-full text-[11px] font-bold tracking-[0.3em] hover:bg-[#005756] transition-all shadow-[0_20px_40px_-15px_rgba(0,109,107,0.3)] hover:-translate-y-1 active:scale-95"
          >
            START LEARNING
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-14 mt-12 text-left w-full border-t border-[#E6F0F0] pt-16 transition-all duration-1000 delay-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
          <div className="space-y-4 group cursor-default transition-all duration-700 hover:-translate-y-2">
            <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#006D6B] transition-colors duration-500 group-hover:text-[#008986]">Algorithm</h3>
            <p className="text-sm text-[#748D8C] font-light leading-relaxed transition-colors duration-500 group-hover:text-[#4B6362]">
              FSRS (Free Spaced Repetition Scheduler) calculates your specific forgetting curve for every word you learn.
            </p>
            <div className="w-0 h-[1px] bg-[#006D6B] transition-all duration-700 group-hover:w-full opacity-30"></div>
          </div>
          <div className="space-y-4 group cursor-default transition-all duration-700 hover:-translate-y-2">
            <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#006D6B] transition-colors duration-500 group-hover:text-[#008986]">Translation</h3>
            <p className="text-sm text-[#748D8C] font-light leading-relaxed transition-colors duration-500 group-hover:text-[#4B6362]">
              Powered by LLM. Instantly translate between Danish and English, Chinese, French, Spanish, Korean, Japanese, or German with AI-driven precision.
            </p>
            <div className="w-0 h-[1px] bg-[#006D6B] transition-all duration-700 group-hover:w-full opacity-30"></div>
          </div>
          <div className="space-y-4 group cursor-default transition-all duration-700 hover:-translate-y-2">
            <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#006D6B] transition-colors duration-500 group-hover:text-[#008986]">Clarity</h3>
            <p className="text-sm text-[#748D8C] font-light leading-relaxed transition-colors duration-500 group-hover:text-[#4B6362]">
              Master unique Danish phonetics with native-speed AI voice generation that clarifies exactly how words are spoken.
            </p>
            <div className="w-0 h-[1px] bg-[#006D6B] transition-all duration-700 group-hover:w-full opacity-30"></div>
          </div>
        </div>
      </div>
      <footer className={`mt-auto py-12 text-[10px] tracking-[0.6em] text-[#A4BEBD] uppercase text-center w-full max-w-5xl border-t border-[#E6F0F0] transition-all duration-1000 delay-[1000ms] ${mounted ? 'opacity-100' : 'opacity-0'
        }`}>
        Klar — Nordic Memory Studio
      </footer>
    </div>
  );
};

export default App;
