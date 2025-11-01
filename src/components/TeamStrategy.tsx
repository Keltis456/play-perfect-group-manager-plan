import { Users, Layers, GitBranch, CheckCircle } from "lucide-react";

const TeamStrategy = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-muted/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase tracking-tight">
            Team & <span className="text-play-pink">Workflow</span> Strategy
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Structure */}
          <div className="bg-card rounded-3xl p-8 shadow-lg border-2 border-border hover:border-play-purple transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-play-purple to-play-blue rounded-2xl flex items-center justify-center shadow-md">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-foreground mb-2">Structure</h3>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-play-pink flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium"><strong className="text-play-purple">3 Game Pods:</strong> Each owns a title (2 live + 1 new)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-play-pink flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium"><strong className="text-play-purple">Central Tech Cell:</strong> Shared tools, CI/CD, performance, and mentoring</span>
              </li>
            </ul>
          </div>

          {/* Unity ↔ Tech Art Collaboration */}
          <div className="bg-card rounded-3xl p-8 shadow-lg border-2 border-border hover:border-play-pink transition-all">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-pink rounded-2xl flex items-center justify-center shadow-md">
                <Layers className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-foreground mb-2">Unity ↔ Tech Art</h3>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-play-pink flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">Weekly integration review (VFX, optimization, memory)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-play-pink flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">Shared "ShaderLib" and texture import rules</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-play-pink flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">Common performance targets & profiling dashboard</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Processes */}
        <div className="bg-gradient-purple-blue rounded-3xl p-10 shadow-xl text-white">
          <div className="flex items-start gap-4 mb-8">
            <div className="flex-shrink-0 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <GitBranch className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-black mb-2 uppercase">Processes</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 hover:bg-white/15 transition-all">
              <h4 className="font-black mb-3 text-play-yellow text-lg">Gitflow + Code Review</h4>
              <p className="text-white/90 font-medium">Mandatory code review process</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 hover:bg-white/15 transition-all">
              <h4 className="font-black mb-3 text-play-yellow text-lg">Definition of Done</h4>
              <p className="text-white/90 font-medium">Tested + profiled + documented</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 hover:bg-white/15 transition-all">
              <h4 className="font-black mb-3 text-play-yellow text-lg">Cross-Discipline Demos</h4>
              <p className="text-white/90 font-medium">Bi-weekly team showcases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStrategy;
