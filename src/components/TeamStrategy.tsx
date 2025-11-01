import { Users, Layers, GitBranch, CheckCircle, Target, Code, Calendar } from "lucide-react";

const TeamStrategy = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-muted/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase tracking-tight">
            Team & <span className="text-play-pink">Delivery</span> Strategy
          </h2>
        </div>

        {/* Team Evaluation & Organization */}
        <div className="bg-card rounded-3xl p-8 shadow-lg border-2 border-border mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-play-purple to-play-blue rounded-2xl flex items-center justify-center shadow-md">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-foreground mb-2">Team Evaluation & Organization</h3>
            </div>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-play-pink flex-shrink-0 mt-1" />
              <span className="text-foreground font-medium">Conduct skill matrix for Unity and Tech Art team (areas: architecture, shaders, performance, tooling, gameplay)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-play-pink flex-shrink-0 mt-1" />
              <div className="text-foreground font-medium">
                <strong className="text-play-purple">Split responsibilities by product line and discipline expertise:</strong>
                <ul className="mt-2 ml-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-play-blue flex-shrink-0 mt-2" />
                    <span><strong>Game Pods:</strong> Each live game + new game = dedicated mini-team (Lead + 2–3 devs + shared tech artist)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-play-blue flex-shrink-0 mt-2" />
                    <span><strong>Central Tech Cell:</strong> 1–2 senior devs + tech artist focusing on shared tools, build pipeline, optimization, and mentoring</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* Parallel Project Management */}
        <div className="bg-card rounded-3xl p-8 shadow-lg border-2 border-border mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-play-pink to-purple-600 rounded-2xl flex items-center justify-center shadow-md">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-foreground mb-2">Parallel Project Management</h3>
            </div>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-play-pink flex-shrink-0 mt-1" />
              <span className="text-foreground font-medium"><strong className="text-play-purple">Live Games:</strong> Stabilization → feature roadmap → performance review</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-play-pink flex-shrink-0 mt-1" />
              <span className="text-foreground font-medium"><strong className="text-play-purple">New Game:</strong> Dedicated pre-production sprint (core loop, architecture, tools), followed by 2-week iterations</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-play-pink flex-shrink-0 mt-1" />
              <span className="text-foreground font-medium">Implement agile pods with unified reporting cadence (weekly sync + async updates)</span>
            </li>
          </ul>
        </div>

        {/* Process & Delivery Standards */}
        <div className="bg-card rounded-3xl p-8 shadow-lg border-2 border-border mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-play-blue to-cyan-500 rounded-2xl flex items-center justify-center shadow-md">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-foreground mb-2">Process & Delivery Standards</h3>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold text-play-purple mb-3">Coding Standards:</h4>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-play-blue flex-shrink-0 mt-2" />
                  <span className="text-foreground font-medium">C# guidelines (naming, architecture, dependencies)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-play-blue flex-shrink-0 mt-2" />
                  <span className="text-foreground font-medium">Prefab modularity, async usage, and memory limits</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-play-purple mb-3">Milestone Tracking:</h4>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-play-blue flex-shrink-0 mt-2" />
                  <span className="text-foreground font-medium">Define "Definition of Done" for builds, features, art integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-play-blue flex-shrink-0 mt-2" />
                  <span className="text-foreground font-medium">Milestones tracked in Jira with burndown and live dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cross-Department Alignment */}
        <div className="bg-gradient-purple-blue rounded-3xl p-10 shadow-xl text-white">
          <div className="flex items-start gap-4 mb-8">
            <div className="flex-shrink-0 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-black mb-2 uppercase">Cross-Department Alignment</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 hover:bg-white/15 transition-all">
              <h4 className="font-black mb-3 text-play-yellow text-lg">Weekly Product–Tech–Design Syncs</h4>
              <p className="text-white/90 font-medium">Prioritize backlog, review blockers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 hover:bg-white/15 transition-all">
              <h4 className="font-black mb-3 text-play-yellow text-lg">Monthly Leadership Review</h4>
              <p className="text-white/90 font-medium">Report on team performance, KPIs, risk mitigation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStrategy;

