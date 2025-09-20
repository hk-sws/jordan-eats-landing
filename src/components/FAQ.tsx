import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What areas do you deliver to in Jordan?",
      answer: "We currently deliver to Amman, Irbid, Zarqa, and other major cities across Jordan. Check our coverage area during checkout to see if we deliver to your location."
    },
    {
      question: "How fast is your delivery service?",
      answer: "Food delivery typically takes 30-45 minutes, grocery shopping takes 1-2 hours, and pharmacy deliveries are completed within 45 minutes. Times may vary based on location and demand."
    },
    {
      question: "What are your delivery fees?",
      answer: "Delivery fees start from 2 JD and vary based on distance and order value. Orders above 25 JD qualify for free delivery in most areas."
    },
    {
      question: "Can I track my order in real-time?",
      answer: "Yes! Once your order is confirmed, you'll receive live tracking updates via SMS and our app, so you know exactly when your delivery will arrive."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash on delivery, credit/debit cards, and mobile wallet payments. All online payments are secured and encrypted."
    },
    {
      question: "Do you deliver prescription medications?",
      answer: "Yes, we partner with licensed pharmacies to deliver prescription medications. A valid prescription is required, and our pharmacists verify all orders."
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers to help you get started.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;