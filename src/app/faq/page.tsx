import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqPage() {
  const faqs = [
    {
      question: "What are the submission guidelines for authors?",
      answer: "Detailed submission guidelines are available on each journal's individual website. Generally, we require manuscripts to be submitted in Word format, following our citation and formatting styles. Please visit the specific journal page for more information."
    },
    {
      question: "Are your journals open access?",
      answer: "Yes, all five of our primary journals are open access, meaning the research is freely available to readers worldwide to support the global dissemination of knowledge."
    },
    {
      question: "What is your peer review process?",
      answer: "We follow a rigorous double-blind peer review process. This means that both the reviewer and author identities are concealed from each other to ensure an unbiased evaluation of the manuscript."
    },
    {
      question: "How can I propose a book?",
      answer: "We welcome book proposals in our areas of focus. Please visit our 'Book Proposal' page to find the submission form and guidelines on what information to include in your proposal."
    },
    {
      question: "Do you offer discounts for bulk orders?",
      answer: "Yes, we provide discounts for bulk purchases made by institutions, libraries, and distributors. Please contact our sales team via the 'Contact' page for more information."
    }
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about publishing, ordering, and more.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </div>
    </div>
  );
}
