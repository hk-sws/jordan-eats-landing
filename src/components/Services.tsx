import { Card, CardContent } from "@/components/ui/card";
import servicesCombo from "@/assets/services-combo.jpg";
import { Utensils, ShoppingCart, Cross } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Utensils,
      title: "Food Delivery",
      description: "Order from your favorite restaurants and get hot, fresh meals delivered to your doorstep",
      color: "text-primary"
    },
    {
      icon: ShoppingCart,
      title: "Grocery Shopping",
      description: "Fresh fruits, vegetables, and all your daily essentials delivered from local markets",
      color: "text-primary"
    },
    {
      icon: Cross,
      title: "Pharmacy Services", 
      description: "Get your medicines and health products delivered safely with prescription support",
      color: "text-primary"
    }
  ];

  return (
    <section id="services" className="py-20 feature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need, delivered fast and fresh across Jordan
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="shadow-primary transition-smooth hover:shadow-glow">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="relative">
            <img 
              src={servicesCombo} 
              alt="Fresh groceries and pharmacy essentials"
              className="w-full h-auto rounded-lg shadow-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;