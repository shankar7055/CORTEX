"use client";
import React from 'react';
import { motion } from "framer-motion";

const curriculumItems = [
  {
    label: "[01.]",
    title: "/ FINANCIAL MANAGEMENT",
    description: [
      "day-wise financials, tax helpers,",
      "compliance workflows, ITR support.",
    ],
  },
  {
    label: "[02.]",
    title: "/ AUTOMATED INVENTORY MANAGEMENT",
    description: [
      "track stock across channels,",
      "auto-reorder and low-stock alerts,",
      "email triggers to owners.",
    ],
  },
  {
    label: "[03.]",
    title: "/ COMPETITOR ANALYSIS",
    description: [
      "web scraping for pricing and SKUs,",
      "market positioning and insights.",
    ],
  },
  {
    label: "[04.]",
    title: "/ GROWTH ANALYSIS",
    description: [
      "trend detection, funnel metrics,",
      "actionable recommendations.",
    ],
  },
  {
    label: "[05.]",
    title: "/ AUTOMATED INVOICES",
    description: [
      "generate, validate, send,",
      "export to accounting.",
    ],
  },
  {
    label: "[06.]",
    title: "/ GENAI CHATBOT",
    description: [
      "ask about sales, inventory,",
      "compliance and tasks,",
      "connected to your backend.",
    ],
  },
];

const CurriculumSection = () => {
  return (
    <section id="features" className="bg-background pt-40 pb-52 flex flex-col items-center overflow-x-clip">
      <motion.div className="flex flex-col items-center mb-[120px] px-6 text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <motion.h2 className="h1 mb-6" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          OUR SERVICES
        </motion.h2>
        <motion.p className="text-body font-medium text-text-secondary max-w-[500px]" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          AI-powered operations for finance, inventory, competitors, growth, invoices, and a GenAI assistant.
        </motion.p>
      </motion.div>

      <div className="container relative w-full">
        {/* Sidebar with timeline for large screens */}
        <div className="absolute left-6 md:left-12 lg:left-20 top-0 h-full hidden lg:block">
          <div className="w-[2px] h-full bg-bg-tertiary" />
          <div style={{ top: '32px' }} className="absolute w-1 h-1 bg-black rounded-full" />
          <div style={{ top: '259px' }} className="absolute w-1 h-1 bg-black rounded-full" />
          <div style={{ top: '525px' }} className="absolute w-1 h-1 bg-black rounded-full" />
          <div style={{ top: '752px' }} className="absolute w-1 h-1 bg-black rounded-full" />
          <div style={{ top: '979px' }} className="absolute w-1 h-1 bg-black rounded-full" />
        </div>
        
        <motion.div className="w-full lg:pl-[124px]" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
          {curriculumItems.map((item, index) => (
            <motion.div key={index} className="flex flex-col lg:flex-row pb-12 lg:pb-20 last:pb-0" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="lg:w-[56px] shrink-0 mb-2 lg:mb-0">
                <p className="text-mono-label text-accent-primary">{item.label}</p>
              </div>
              <div className="flex-1">
                <p className="text-body font-medium text-text-secondary mb-2">{item.title}</p>
                <p className="text-big text-text-tertiary">
                  {item.description.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < item.description.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CurriculumSection;
