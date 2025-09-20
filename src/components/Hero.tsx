import { Button } from "@/components/ui/button";
import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="absolute inset-0">
        <img 
          src={heroFood} 
          alt="Delicious Middle Eastern food spread" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative container mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Fast Delivery to
          <span className="text-primary block">Your Door</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get your favorite food, fresh groceries, and pharmacy essentials delivered quickly across Jordan
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="hero-gradient shadow-glow text-lg px-8 py-6">
            Order Now
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Download App
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">30 min</div>
            <div className="text-muted-foreground">Average delivery time</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">1000+</div>
            <div className="text-muted-foreground">Restaurant partners</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-muted-foreground">Service availability</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;