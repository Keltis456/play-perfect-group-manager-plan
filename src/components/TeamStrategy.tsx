import { Users, Layers, GitBranch, CheckCircle } from "lucide-react";

const TeamStrategy = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Team & Workflow Strategy
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Structure */}
          <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Structure</h3>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground"><strong>3 Game Pods:</strong> Each owns a title (2 live + 1 new)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground"><strong>Central Tech Cell:</strong> Shared tools, CI/CD, performance, and mentoring</span>
              </li>
            </ul>
          </div>

          {/* Unity ↔ Tech Art Collaboration */}
          <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-cyan-600 rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Unity ↔ Tech Art Collaboration</h3>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Weekly integration review (VFX, optimization, memory)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Shared "ShaderLib" and texture import rules</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Common performance targets & profiling dashboard</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Processes */}
        <div className="bg-gradient-to-br from-primary to-blue-700 rounded-2xl p-8 shadow-lg text-white">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Processes</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="font-bold mb-2">Gitflow + Code Review</h4>
              <p className="text-blue-100 text-sm">Mandatory code review process</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="font-bold mb-2">Definition of Done</h4>
              <p className="text-blue-100 text-sm">Tested + profiled + documented</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="font-bold mb-2">Cross-Discipline Demos</h4>
              <p className="text-blue-100 text-sm">Bi-weekly team showcases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStrategy;
