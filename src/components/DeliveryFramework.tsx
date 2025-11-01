import { Gamepad2, Rocket, Wrench } from "lucide-react";

const frameworks = [
  {
    icon: Gamepad2,
    title: "Live Games",
    items: [
      "Stabilize performance, reduce hotfix churn",
      "Quarterly feature roadmap with measurable KPIs"
    ],
    color: "bg-gradient-to-br from-play-purple to-play-blue"
  },
  {
    icon: Rocket,
    title: "New Game",
    items: [
      "2-week pre-production sprint (core loop, architecture)",
      "Vertical slice by Day 90 using shared tech stack"
    ],
    color: "bg-gradient-pink"
  },
  {
    icon: Wrench,
    title: "Standards & Tools",
    items: [
      "Unified SDK: analytics, remote config, ads",
      "CI/CD build automation & Slack alerts",
      '"Play Perfect Tech Handbook" for dev + art standards'
    ],
    color: "bg-gradient-to-br from-play-blue to-cyan-500"
  }
];

const DeliveryFramework = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase tracking-tight">
            Parallel <span className="text-play-pink">Delivery</span> Framework
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
            Simultaneous execution across live games, new development, and foundational tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {frameworks.map((framework, index) => {
            const Icon = framework.icon;
            return (
              <div 
                key={index}
                className="group bg-card rounded-3xl p-8 shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-play-yellow"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${framework.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-black text-foreground mb-6">{framework.title}</h3>

                <ul className="space-y-4">
                  {framework.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-play-pink flex-shrink-0 mt-2" />
                      <span className="text-foreground font-medium leading-relaxed">{item}</span>
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
