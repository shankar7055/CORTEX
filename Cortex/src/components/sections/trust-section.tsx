"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const TrustSection = () => {
  return (
    <section className="bg-background py-20 text-foreground lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <motion.div className="mb-24 flex items-center justify-center lg:mb-32" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a190a3d1-0e74-4981-86fa-6d6025c2ae8a-izum-study/assets/svgs/logo-3.svg"
            alt="IZUM brand mark"
            width={242}
            height={136}
            className="h-auto w-[150px] md:w-[242px]"
          />
        </motion.div>

        <motion.div className="flex flex-col items-center text-center" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <motion.p className="text-label opacity-65" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>[result guaranteed]</motion.p>
          <motion.h2 className="h1 mt-6 opacity-10 md:mt-8" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            WHY TEAMS <br />
            TRUST CORTEX
          </motion.h2>
          <motion.p className="text-body mt-6 max-w-xl uppercase opacity-25 md:mt-8 lg:max-w-2xl" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            AUTOMATES SALES, FINANCIALS, CA WORK & ITR, TAX HELPERS, INVENTORY, CUSTOMER OPS, AND ANALYTICS—ALL SURFACED IN ONE DASHBOARD WITH A GENAI ASSISTANT.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
