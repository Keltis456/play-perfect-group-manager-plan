import { Gamepad2, Rocket, Wrench } from "lucide-react";

const frameworks = [
  {
    icon: Gamepad2,
    title: "Live Games",
    items: [
      "Stabilize performance, reduce hotfix churn",
      "Quarterly feature roadmap with measurable KPIs"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Rocket,
    title: "New Game",
    items: [
      "2-week pre-production sprint (core loop, architecture)",
      "Vertical slice by Day 90 using shared tech stack"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Wrench,
    title: "Standards & Tools",
    items: [
      "Unified SDK: analytics, remote config, ads",
      "CI/CD build automation & Slack alerts",
      '"Play Perfect Tech Handbook" for dev + art standards'
    ],
    color: "from-cyan-500 to-cyan-600"
  }
];

const DeliveryFramework = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Parallel Delivery Framework
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simultaneous execution across live games, new development, and foundational tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {frameworks.map((framework, index) => {
            const Icon = framework.icon;
            return (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border border-border"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${framework.color} mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-6">{framework.title}</h3>

                <ul className="space-y-3">
                  {framework.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <span className="text-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DeliveryFramework;
