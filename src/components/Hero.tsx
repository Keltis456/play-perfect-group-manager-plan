const Hero = () => {
  const scrollToContent = () => {
    document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-purple-blue overflow-hidden">
      {/* Animated background pattern - gaming aesthetic */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-play-pink rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-play-blue rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-play-yellow rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8 flex justify-center">
          <img 
            src={`${import.meta.env.BASE_URL}play-perfect-logo.png`}
            alt="Play Perfect Logo" 
            className="h-20 md:h-24 w-auto object-contain"
          />
        </div>
        
        <div className="inline-block mb-8 px-6 py-3 bg-play-pink/20 backdrop-blur-sm rounded-full border-2 border-play-pink/40">
          <span className="text-play-yellow font-bold tracking-wide text-lg uppercase">90-Day Transformation Plan</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white mb-4 leading-none tracking-tight">
          PLAY PERFECT
        </h1>
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
          <span className="text-play-yellow">Unity Group</span>
          <span className="text-white"> Manager</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-semibold">
          Strategic onboarding framework by <span className="text-play-yellow font-bold">Mykyta Brik</span> — Unity Group Manager with 8+ years of experience at Moon Active, Bini Bambini and Sett AI
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={scrollToContent}
            className="group px-10 py-5 bg-play-pink hover:bg-play-pink/90 text-white rounded-2xl font-black text-xl transition-all duration-300 shadow-glow hover:shadow-glow hover:scale-105 uppercase tracking-wide"
          >
            Explore the Plan
          </button>
          <div className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl border-2 border-white/30 font-bold">
            <span className="text-play-yellow">3 Phases</span> • <span className="text-play-yellow">90 Days</span> • <span className="text-play-yellow">1 Mission</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
