import { Calendar, Target, TrendingUp } from "lucide-react";

const phases = [
  {
    days: "1-30",
    title: "Observe, Connect, Assess",
    icon: Calendar,
    subtitle: "Learn & Assess",
    goals: [
      "Understand people, processes, and product",
      "Establish communication rhythm across locations",
      "Map delivery bottlenecks and tech stack gaps"
    ],
    focusAreas: [
      "Discovery: Review live games' codebases, project setups, CI/CD, asset pipelines, and current roadmap",
      "Relationships: 1:1s with Unity devs, Tech Artists, Product Leads, Design, and QA. Build trust and context",
      "Tools & Workflow Audit: Unity versions, branches, build pipelines, addressable setup, profiling tools, and task management (Jira/Linear)",
      "Cultural Integration: Clarify expectations, time zones, communication norms"
    ],
    kpis: [
      "100% of team 1:1s completed",
      "Live game architecture docs mapped",
      '"Health Report" of current pipelines and codebase delivered'
    ],
    color: "bg-gradient-to-br from-play-purple to-play-blue"
  },
  {
    days: "31-60",
    title: "Align, Optimize, Define",
    icon: Target,
    subtitle: "Align & Define",
    goals: [
      "Introduce clear processes and standards",
      "Establish Unity–Tech Art collaboration model",
      "Kick off pre-production for new game"
    ],
    focusAreas: [
      "Team Organization: Define roles, ownership, and escalation flow across Ukraine & Israel",
      "Unity–Tech Art Sync: Weekly cross-disciplinary review (profiling, shaders, optimization, VFX integration)",
      "Process Implementation: Branching model (main/dev/feature), code review & merge standards, performance & build KPIs per project",
      "Pre-Production for New Game: Tech evaluation (core loop, scene structure, tools, scalability)"
    ],
    kpis: [
      "1 unified dev workflow implemented across teams",
      "New game prototype greenlit",
      "First sprint cycle completed with stable build pipeline"
    ],
    color: "bg-gradient-to-br from-play-pink to-play-purple"
  },
  {
    days: "61-90",
    title: "Deliver, Scale, Institutionalize",
    icon: TrendingUp,
    subtitle: "Deliver & Institutionalize",
    goals: [
      "Deliver operational stability across all projects",
      "Establish visibility, reporting, and long-term tech strategy"
    ],
    focusAreas: [
      "Live Ops Efficiency: Implement CI/CD for live builds, reduce hotfix turnaround",
      'Documentation: Create internal "Play Perfect Tech Handbook" (coding standards, profiling guide, art import rules)',
      "Performance & QA Integration: Add automated profiling tests and frame-budget validation",
      "Cross-Team Culture: Bi-weekly Unity–Tech Art knowledge sessions"
    ],
    kpis: [
      "2+ games sharing the same tech baseline",
      "Stable CI/CD pipeline for live and new games",
      "20% reduction in hotfix/build iteration time"
    ],
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
          
          <div className="mt-12 flex justify-center">
            <img 
              src="/who-we-are.png" 
              alt="Who We Are" 
              className="max-w-2xl w-full h-auto rounded-3xl shadow-lg"
            />
          </div>
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

                <div className="space-y-6">
                  {/* Goals Section */}
                  <div>
                    <p className="text-sm font-bold text-play-purple mb-3 uppercase">Goals</p>
                    <ul className="space-y-2">
                      {phase.goals.map((goal, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-play-pink flex-shrink-0 mt-2" />
                          <span className="text-foreground font-medium leading-relaxed text-sm">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Focus Areas Section */}
                  <div>
                    <p className="text-sm font-bold text-play-purple mb-3 uppercase">Focus Areas</p>
                    <ul className="space-y-2">
                      {phase.focusAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-play-blue flex-shrink-0 mt-2" />
                          <span className="text-foreground font-medium leading-relaxed text-sm">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* KPIs Section */}
                  <div>
                    <p className="text-sm font-bold text-play-purple mb-3 uppercase">KPIs</p>
                    <ul className="space-y-2">
                      {phase.kpis.map((kpi, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-play-yellow flex-shrink-0 mt-2" />
                          <span className="text-foreground font-medium leading-relaxed text-sm">{kpi}</span>
                        </li>
                      ))}
                    </ul>
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
