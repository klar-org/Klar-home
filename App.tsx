
import React from 'react';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white selection:bg-[#006D6B] selection:text-white overflow-hidden">
      <div className="max-w-4xl w-full py-12 md:py-24 text-center flex flex-col items-center">
        <header className="mb-14 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold tracking-[0.8em] uppercase text-[#006D6B]">Klar</h1>
          <div className="mt-4 w-12 h-[1.5px] bg-[#006D6B] mx-auto opacity-20"></div>
        </header>

        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <h2 className="text-xl md:text-3xl font-extralight tracking-[0.1em] text-[#002B2A] leading-tight">
            Danish mastery, <span className="italic font-serif opacity-90 text-[#006D6B]">simplified.</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base text-[#5B7170] font-light leading-relaxed px-4 opacity-80">
            Master Danish with mathematical precision. Klar adapts to your unique memory patterns using the <span className="font-medium text-[#006D6B]">FSRS algorithm</span>, ensuring you never waste a second on words you already know.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <a
            href="https://klar.rimlys.org"
            className="group flex items-center gap-4 px-16 py-6 bg-[#006D6B] text-white rounded-full text-[11px] font-bold tracking-[0.3em] hover:bg-[#005756] transition-all shadow-[0_20px_40px_-15px_rgba(0,109,107,0.3)] hover:-translate-y-1 active:scale-95"
          >
            LAUNCH TOOL
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-32 text-left w-full animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 border-t border-[#E6F0F0] pt-16">
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
      <footer className="mt-auto py-12 text-[10px] tracking-[0.6em] text-[#A4BEBD] uppercase text-center w-full max-w-5xl border-t border-[#E6F0F0]">
        Klar — Nordic Memory Studio
      </footer>
    </div>
  );
};

export default App;
