import { Calendar, Target, TrendingUp } from "lucide-react";

const phases = [
  {
    days: "1-30",
    title: "Learn & Assess",
    icon: Calendar,
    focus: "Understand team, codebases, pipelines, culture",
    outcomes: "Team 1:1s done, process map & health report delivered",
    color: "bg-gradient-to-br from-play-purple to-play-blue"
  },
  {
    days: "31-60",
    title: "Align & Define",
    icon: Target,
    focus: "Introduce standards, workflows, and Tech Art integration",
    outcomes: "Unified branching/review model, new game prototype ready",
    color: "bg-gradient-to-br from-play-pink to-play-purple"
  },
  {
    days: "61-90",
    title: "Deliver & Institutionalize",
    icon: TrendingUp,
    focus: "Optimize delivery, documentation, CI/CD",
    outcomes: "Shared tools baseline, 20% faster iteration, leadership visibility",
    color: "bg-gradient-to-br from-play-blue to-cyan-500"
  }
];

const Overview = () => {
  return (
    <section id="overview" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase tracking-tight">
            90-Day Onboarding <span className="text-play-pink">Overview</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
            Establish clarity, alignment, and execution rhythm across Unity & Tech Art teams
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div 
                key={index}
                className="group relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-play-pink"
              >
                {/* Timeline connector */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-8 w-16 h-1 bg-gradient-to-r from-play-pink/50 to-transparent" />
                )}

                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${phase.color} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <div className="mb-6">
                  <span className="text-sm font-black text-play-yellow uppercase tracking-wider">Days {phase.days}</span>
                  <h3 className="text-2xl font-black text-foreground mt-2">{phase.title}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-bold text-play-purple mb-2 uppercase">Focus</p>
                    <p className="text-foreground font-medium leading-relaxed">{phase.focus}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-play-purple mb-2 uppercase">Key Outcomes</p>
                    <p className="text-foreground font-medium leading-relaxed">{phase.outcomes}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Overview;
