import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
          <span className="text-accent font-semibold tracking-wide">90-Day Transformation Plan</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Play Perfect
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-300">
            Unity Group Manager
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Strategic onboarding framework by Alex Turner — Unity Technical Director with 12+ years at Playtika, Voodoo, and Nexon
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToContent}
            className="group px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-glow hover:scale-105"
          >
            Explore the Plan
          </button>
          <div className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20">
            3 Phases • 90 Days • 1 Mission
          </div>
        </div>

        <button 
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-8 h-8 text-white/70" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
