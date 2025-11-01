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
    <section className="py-24 px-6 bg-gradient-to-br from-primary via-blue-800 to-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            90-Day Outcomes & KPIs
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
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
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <Icon className="w-8 h-8 text-accent mb-4" />
                <div className="text-3xl font-bold text-white mb-1">{kpi.value}</div>
                <div className="text-blue-200 text-sm">{kpi.label}</div>
              </div>
            );
          })}
        </div>

        {/* Strategic Deliverables */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Strategic Deliverables</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span className="text-blue-100">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center bg-accent/10 backdrop-blur-md rounded-2xl p-8 border border-accent/30">
          <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-4">
            <span className="text-accent font-semibold text-sm tracking-wide">VISION</span>
          </div>
          <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4">
            By Day 90 — Three cohesive teams, one shared engine.
          </blockquote>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Faster iteration, predictable delivery, and a scalable tech foundation for all future Play Perfect titles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
