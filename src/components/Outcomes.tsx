import { Award, TrendingUp, Shield, BookOpen } from "lucide-react";

const kpis = [
  { label: "Build Stability", value: "≥ 95%", icon: Shield },
  { label: "Sprint Velocity", value: "+15%", icon: TrendingUp },
  { label: "Frame Budget", value: "On Target", icon: Award },
  { label: "Team Training", value: "100%", icon: BookOpen }
];

const deliverables = [
  "Unified dev & art pipeline across all titles",
  "Documented roadmap for live and new games",
  "Defined on-call rotation and monitoring setup",
  "Tech debt & risk register established"
];

const Outcomes = () => {
  return (
    <section className="py-24 px-6 bg-gradient-purple-blue relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-play-pink rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-play-yellow rounded-full blur-3xl opacity-20" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            90-Day <span className="text-play-yellow">Outcomes</span> & KPIs
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-semibold">
            Measurable results that transform team performance
          </p>
        </div>

        {/* KPIs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-white/30 hover:bg-white/15 hover:border-play-yellow transition-all duration-300 hover:scale-105 text-center"
              >
                <Icon className="w-12 h-12 text-play-yellow mb-4 mx-auto" />
                <div className="text-4xl font-black text-white mb-2">{kpi.value}</div>
                <div className="text-white/80 font-semibold uppercase text-xs tracking-wider">{kpi.label}</div>
              </div>
            );
          })}
        </div>

        {/* Strategic Deliverables */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border-2 border-white/30 mb-12">
          <h3 className="text-3xl font-black text-white mb-8 uppercase">Strategic <span className="text-play-yellow">Deliverables</span></h3>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-play-pink flex-shrink-0 mt-2" />
                <span className="text-white font-medium text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center bg-play-yellow/10 backdrop-blur-md rounded-3xl p-10 border-2 border-play-yellow/40">
          <div className="inline-block px-6 py-3 bg-play-pink/90 rounded-full mb-6">
            <span className="text-white font-black text-sm tracking-widest uppercase">Vision</span>
          </div>
          <blockquote className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
            By Day 90 — <span className="text-play-yellow">Three cohesive teams,</span> one shared engine.
          </blockquote>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-semibold leading-relaxed">
            Faster iteration, predictable delivery, and a scalable tech foundation for all future Play Perfect titles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
