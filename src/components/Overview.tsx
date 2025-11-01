import { Calendar, Target, TrendingUp } from "lucide-react";

const phases = [
  {
    days: "1-30",
    title: "Learn & Assess",
    icon: Calendar,
    focus: "Understand team, codebases, pipelines, culture",
    outcomes: "Team 1:1s done, process map & health report delivered",
    color: "from-blue-500 to-blue-600"
  },
  {
    days: "31-60",
    title: "Align & Define",
    icon: Target,
    focus: "Introduce standards, workflows, and Tech Art integration",
    outcomes: "Unified branching/review model, new game prototype ready",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    days: "61-90",
    title: "Deliver & Institutionalize",
    icon: TrendingUp,
    focus: "Optimize delivery, documentation, CI/CD",
    outcomes: "Shared tools baseline, 20% faster iteration, leadership visibility",
    color: "from-teal-500 to-teal-600"
  }
];

const Overview = () => {
  return (
    <section id="overview" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            90-Day Onboarding Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Establish clarity, alignment, and execution rhythm across Unity & Tech Art teams
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div 
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                {/* Timeline connector */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-8 w-16 h-0.5 bg-gradient-to-r from-border to-transparent" />
                )}

                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${phase.color} mb-6 shadow-md`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="mb-4">
                  <span className="text-sm font-semibold text-accent">Days {phase.days}</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">{phase.title}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Focus</p>
                    <p className="text-foreground">{phase.focus}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Key Outcomes</p>
                    <p className="text-foreground">{phase.outcomes}</p>
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
