import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What format are the ebooks and how do I access them?",
    answer: "All ebooks are delivered as high-quality PDF files that work on any device - desktop, tablet, or smartphone. You'll receive instant download links immediately after purchase via email, plus access to your secure member dashboard."
  },
  {
    question: "How quickly will I see results from implementing these strategies?",
    answer: "Most of our students see initial results within 7-14 days of implementation. The AI automation strategies can be set up in a weekend, while the marketing tactics typically show ROI improvements within 30 days. However, results vary based on your industry and implementation speed."
  },
  {
    question: "What's included with the PLR White Label Rights?",
    answer: "PLR rights include: Full resell rights with 100% profit retention, complete rebranding permissions, editable source files, ready-made sales pages, promotional graphics, email sequences, and zero restrictions on how you use or sell the content."
  },
  {
    question: "Is there any ongoing cost or subscription?",
    answer: "No! This is a one-time payment with lifetime access to all content and bonuses. There are no hidden costs, recurring fees, or subscription charges. You own the content forever."
  },
  {
    question: "What if I'm not satisfied with my purchase?",
    answer: "We offer a 100% satisfaction guarantee. If you're not completely satisfied with the bundle, simply contact our support team for a full refund. However, we're confident you'll love the content - 97% of our customers are thrilled with their results."
  }
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">Everything you need to know about the Six-Figure Bundle</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-white rounded-lg shadow-md border-0"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 rounded-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
