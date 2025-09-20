import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms and Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using QuickDelivery Jordan's services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Service Description</h2>
            <p className="text-muted-foreground mb-4">
              QuickDelivery Jordan provides on-demand delivery services for food, groceries, and pharmacy items throughout Jordan. We act as an intermediary between customers and merchants.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">User Responsibilities</h2>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Provide accurate delivery information and contact details</li>
              <li>Be available to receive deliveries at the specified time</li>
              <li>Pay for orders in full, including delivery fees</li>
              <li>Treat delivery partners with respect and courtesy</li>
              <li>Not use the service for illegal or inappropriate purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Orders and Payment</h2>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>All orders are subject to availability and merchant acceptance</li>
              <li>Prices may vary from in-store prices</li>
              <li>Payment is due at the time of order or delivery</li>
              <li>We reserve the right to refuse or cancel orders</li>
              <li>Delivery fees and service charges apply as displayed at checkout</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Delivery Policy</h2>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Delivery times are estimates and may vary due to weather, traffic, or high demand</li>
              <li>We deliver only to areas within our service zones</li>
              <li>Age verification may be required for certain items</li>
              <li>We are not responsible for items left unattended at your request</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Refunds and Cancellations</h2>
            <ul className="list-disc pl-6 mb-4 text-muted-foreground">
              <li>Orders can be cancelled before merchant confirmation</li>
              <li>Refunds for cancelled orders will be processed within 5-7 business days</li>
              <li>Issues with order quality should be reported within 24 hours</li>
              <li>Refund eligibility is subject to merchant and item policies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              QuickDelivery Jordan's liability is limited to the cost of the order. We are not responsible for indirect damages, food allergies, or issues with merchant products beyond our delivery service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These terms are governed by the laws of the Hashemite Kingdom of Jordan. Any disputes will be resolved in Jordanian courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              For questions regarding these terms, contact us at:
            </p>
            <p className="text-muted-foreground mt-2">
              Email: legal@quickdelivery-jordan.com<br/>
              Phone: +962 6 XXX XXXX<br/>
              Address: Amman, Jordan
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;