const Footer = () => {
  return (
    <footer className="bg-secondary py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">
              QuickDelivery
            </div>
            <p className="text-muted-foreground max-w-md">
              Fast, reliable delivery service across Jordan for food, groceries, and pharmacy needs.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8 text-muted-foreground">
            <a href="#food" className="hover:text-primary transition-smooth">Food Delivery</a>
            <a href="#grocery" className="hover:text-primary transition-smooth">Grocery Shopping</a>
            <a href="#pharmacy" className="hover:text-primary transition-smooth">Pharmacy Services</a>
            <a href="#help" className="hover:text-primary transition-smooth">Help Center</a>
            <a href="#contact" className="hover:text-primary transition-smooth">Contact Us</a>
            <a href="/privacy-policy" className="hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-primary transition-smooth">Terms & Conditions</a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 QuickDelivery Jordan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;