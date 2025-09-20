const Footer = () => {
  return (
    <footer className="bg-secondary py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">
              QuickDelivery
            </div>
            <p className="text-muted-foreground">
              Fast, reliable delivery service across Jordan for food, groceries, and pharmacy needs.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-secondary-foreground">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#food" className="hover:text-primary transition-smooth">Food Delivery</a></li>
              <li><a href="#grocery" className="hover:text-primary transition-smooth">Grocery Shopping</a></li>
              <li><a href="#pharmacy" className="hover:text-primary transition-smooth">Pharmacy Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-secondary-foreground">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#help" className="hover:text-primary transition-smooth">Help Center</a></li>
              <li><a href="#contact" className="hover:text-primary transition-smooth">Contact Us</a></li>
              <li><a href="#faq" className="hover:text-primary transition-smooth">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-secondary-foreground">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#privacy" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-primary transition-smooth">Terms & Conditions</a></li>
              <li><a href="#cookies" className="hover:text-primary transition-smooth">Cookie Policy</a></li>
            </ul>
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