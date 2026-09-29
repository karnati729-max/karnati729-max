import { Mail, ArrowDown, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  const handleContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl"
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              {personalInfo.course}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {personalInfo.name.split(' ')[0]}{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {personalInfo.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            <p className="text-xl text-cyan-400/90 font-medium mb-4">
              {personalInfo.tagline}
            </p>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {personalInfo.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleContact}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
              <button
                onClick={handleScrollDown}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
              >
                Learn More
                <ArrowDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Profile photo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity duration-500" />

              {/* Rotating ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-cyan-400/30 border-dashed animate-[spin_20s_linear_infinite]" />

              <img
                src={personalInfo.profilePhoto}
                alt={personalInfo.name}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
              />

              {/* Badge */}
              <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-cyan-400/20 shadow-xl">
                <p className="text-cyan-400 text-xs font-semibold">Team {personalInfo.team}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
}
