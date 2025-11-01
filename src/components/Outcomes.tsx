import { Award, TrendingUp, Shield, BookOpen, Map, Users, Bell, BarChart, AlertTriangle, Layers, Package } from "lucide-react";

const kpis = [
  { label: "Build Stability", value: "≥ 95%", icon: Shield },
  { label: "Sprint Velocity", value: "+15%", icon: TrendingUp },
  { label: "Frame Budget", value: "On Target", icon: Award },
  { label: "Team Training", value: "100%", icon: BookOpen }
];

const strategicPlan = [
  {
    title: "Development Roadmap",
    icon: Map,
    items: [
      "Documented pipeline for live game updates (quarterly milestones)",
      "New game tech plan (core systems, shared SDKs)"
    ]
  },
  {
    title: "Team Structure",
    icon: Users,
    items: [
      "Defined pods, lead roles, mentorship program",
      "Cross-pod tech guilds"
    ]
  },
  {
    title: "Monitoring & On-Call",
    icon: Bell,
    items: [
      "Automated build reports",
      "Slack alerts for failed builds",
      "Rotating on-call schedule for live titles"
    ]
  },
  {
    title: "KPIs & Tracking",
    icon: BarChart,
    items: [
      "Weekly velocity, build stability %",
      "Frame budget compliance, bug regression count",
      "Feature delivery ratio"
    ]
  },
  {
    title: "Risk Mitigation",
    icon: AlertTriangle,
    items: [
      "Identify codebase tech debt",
      "Unify Unity versions",
      "Reduce single-point dependencies",
      "Add documentation coverage"
    ]
  },
  {
    title: "Unity–Tech Art Framework",
    icon: Layers,
    items: [
      "Shared tools (ShaderLib, TextureValidator, VFX budget monitor)",
      "Co-review pipeline for new features"
    ]
  },
  {
    title: "Multi-Game Framework",
    icon: Package,
    items: [
      "Common SDK (analytics, ads, remote config)",
      "Shared UI kit, addressable system",
      "CI/CD templates"
    ]
  }
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
            90-Day <span className="text-play-yellow">Strategic</span> Plan
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-semibold">
            Comprehensive framework for team transformation
          </p>
        </div>

        {/* Strategic Plan */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border-2 border-white/30 mb-12">
          <h3 className="text-3xl font-black text-white mb-8 uppercase">Strategic <span className="text-play-yellow">Plan</span></h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicPlan.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-play-yellow/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-play-yellow" />
                    </div>
                    <h4 className="text-lg font-black text-white">{section.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-play-pink flex-shrink-0 mt-2" />
                        <span className="text-white/90 font-medium text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
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
