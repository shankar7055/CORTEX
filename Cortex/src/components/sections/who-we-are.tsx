"use client";
import React from 'react';
import { motion } from "framer-motion";

const WhoWeAreSection = () => {
  return (
    <section 
      id="about-us" 
      className="bg-background text-text-primary pt-[120px] pb-[160px] md:pb-[240px]"
    >
      <div className="container">
        
        <motion.div className="flex justify-between items-start mb-[120px]" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <motion.h2 className="text-5xl md:text-6xl lg:text-[72px] font-bold uppercase tracking-[-0.01em] leading-none" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            CORTEX — AI-POWERED <br />
            E-COMMERCE HUB <br />
            FOR OPERATIONS & GROWTH
          </motion.h2>
          <div className="hidden lg:block w-2 h-2 bg-black rounded-full mt-[10px]" />
        </motion.div>

        <motion.div className="flex flex-col lg:flex-row border-t border-border-subtle pt-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
          <div className="w-full lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
            <motion.p className="font-mono text-[13px] uppercase text-text-secondary" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              [ABOUT US]
            </motion.p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div className="flex flex-col gap-6" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="font-mono text-base text-accent-primary">01.</p>
              <p className="font-mono text-base uppercase text-text-tertiary leading-[24px]">
                CORTEX INTEGRATES WITH ANY E-COMMERCE BACKEND AND AUTOMATES DAY-TO-DAY OPERATIONS: SALES MANAGEMENT, FINANCIALS, INVENTORY, COMPLIANCE, AND CUSTOMER WORKFLOWS — ALL POWERED BY OPENAI MODELS.
              </p>
            </motion.div>
            <motion.div className="flex flex-col gap-6" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="font-mono text-base text-accent-primary">02.</p>
              <p className="font-mono text-base uppercase text-text-tertiary leading-[24px]">
                OUR DASHBOARD SURFACES INSIGHTS: COMPETITOR & MARKET ANALYSIS, SKU TRENDS, WEBSITE HEALTH TRIGGERS, TAX & ITR SUPPORT, AND AUTOMATED INVOICES — WITH A GENAI CHATBOT FOR OWNERS.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
