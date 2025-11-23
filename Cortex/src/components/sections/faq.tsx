"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqData = [
  {
    id: "faq-1",
    question: "/ SALES MANAGEMENT & CUSTOMER OPS",
    answer: "SALES MANAGEMENT • CUSTOMER MANAGEMENT • AUTOMATED INVOICE GENERATION • WEBSITE HEALTH TRIGGER • GENAI CHATBOT TO ASSIST OWNER",
    number: "FAQ 01.",
  },
  {
    id: "faq-2",
    question: "/ FINANCIAL MANAGEMENT & COMPLIANCE",
    answer: "FINANCIAL MANAGEMENT • ALL CA WORK & ITR FILING • HELP IN TAX DEDUCTION • FINANCIAL & COMPLIANCE AUTOMATION",
    number: "FAQ 02.",
  },
  {
    id: "faq-3",
    question: "/ INVENTORY & DAY‑WISE OVERVIEW",
    answer: "AUTOMATED INVENTORY MANAGEMENT • CUSTOMER MANAGEMENT • A PROPER DAY‑WISE OVERVIEW ON THE HOMEPAGE",
    number: "FAQ 03.",
  },
  {
    id: "faq-4",
    question: "/ ANALYTICS & DASHBOARD",
    answer: "COMPETITOR ANALYSIS • E‑COM STORE/WEBSITE GROWTH ANALYSIS • THESE FEATURES ARE REFLECTED IN A DASHBOARD",
    number: "FAQ 04.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="bg-background text-foreground py-20 md:py-32 lg:py-40">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-6">
          
          {/* Left Column */}
          <div className="lg:pr-12">
            <motion.div className="grid grid-cols-[1fr_auto] items-start gap-x-6 mb-8 lg:mb-0" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <motion.h2 className="h2" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                What Cortex Automates
                <br />
                Sales • Finance • Inventory • Analytics
              </motion.h2>
              <motion.p className="text-mono-label text-black/65" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>[4]</motion.p>
            </motion.div>
            <p className="text-body text-black/65 mt-8 lg:mt-20 max-w-[400px] hidden lg:block">
              A unified hub for sales management, financials, CA work & ITR, tax helpers, inventory, customer ops, and growth analytics. Everything is surfaced in one dashboard with a GenAI assistant.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:pl-12 lg:border-l lg:border-black/10">
            <p className="text-body text-black/65 mb-8 lg:hidden">
              A unified hub for sales, finance, inventory, compliance, customer ops, and analytics—reflected in one dashboard with a GenAI assistant.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item) => (
                <AccordionItem value={item.id} key={item.id} className="border-b border-black/10 last:border-b-0">
                  <AccordionTrigger className="group flex w-full items-start justify-between gap-4 py-8 text-left hover:no-underline md:py-12">
                    <h3 className="text-big font-medium">{item.question}</h3>
                    <div className="flex flex-shrink-0 items-start gap-6 sm:gap-14 ml-4">
                      <span className="text-mono-label text-accent-primary pt-2 font-normal">{item.number}</span>
                      <div className="relative mt-2 h-6 w-6 flex-shrink-0">
                        <span className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-black"></span>
                        <span className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-black transition-opacity duration-300 group-data-[state=open]:opacity-0"></span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 md:pb-12 pr-20 sm:pr-28">
                    <motion.p className="text-body text-black/90 uppercase" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{item.answer}</motion.p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
