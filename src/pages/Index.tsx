import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import TeamStrategy from "@/components/TeamStrategy";
import DeliveryFramework from "@/components/DeliveryFramework";
import Outcomes from "@/components/Outcomes";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Overview />
      <TeamStrategy />
      <DeliveryFramework />
      <Outcomes />
    </main>
  );
};

export default Index;
