"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const points = [
  {
    id: "01.",
    title: "/ INTEGRATES WITH ANY BACKEND",
    description: "Connect Cortex to Shopify, WooCommerce, custom stacks—stream data in minutes via APIs.",
  },
  {
    id: "02.",
    title: "/ AUTOMATES OPERATIONS",
    description: "Sales, financials, inventory, compliance, invoicing—run hands-free with smart workflows.",
  },
  {
    id: "03.",
    title: "/ OPENAI-POWERED INSIGHTS",
    description: "Generative analyses for competitors, SKU trends, and growth recommendations, plus a chatbot for owners.",
  },
];

const WhyTaptop = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let raf = 0;
    let target = 0;
    const tick = () => {
      setAngle((prev) => {
        const next = prev + (target - prev) * 0.08;
        if (Math.abs(next - target) < 0.01) {
          raf = 0;
          return target;
        }
        raf = requestAnimationFrame(tick);
        return next;
      });
    };
    const onScroll = () => {
      target = window.scrollY * 0.01;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <section className="bg-background text-text-primary py-24 md:py-32 lg:py-40">
      <div className="container">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <motion.h2 className="h2" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              WHY CHOOSE <br />
              CORTEX?
            </motion.h2>
            
            <div className="mt-20 lg:mt-0">
              <p className="text-mono-label text-text-tertiary">/ AI-NATIVE COMMERCE</p>
              <div className="relative w-full max-w-[320px] aspect-square mt-8">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a190a3d1-0e74-4981-86fa-6d6025c2ae8a-izum-study/assets/images/krug_iz_sharikov-15.svg"
                  alt="Abstract dot pattern resembling a person"
                  fill
                  className="object-contain object-left animate-pulse"
                  style={{ transform: `rotate(${angle}deg)`, transformOrigin: "50% 50%", transition: "transform 1500ms ease-out" }}
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="border-l border-border-subtle pl-8 md:pl-16 lg:pl-20">
            <div className="flex justify-end">
              <div className="flex items-center gap-4">
                <span className="text-label text-text-secondary">[JOIN US]</span>
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
            </div>
            
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-20 mt-24 sm:mt-32" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
              {points.map((point) => (
                <motion.div key={point.id} className="flex flex-col gap-3" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <span className="text-mono-label text-accent-primary">{point.id}</span>
                  <h3 className="text-mono-label text-text-primary uppercase">{point.title}</h3>
                  <p className="text-body text-text-secondary max-w-[300px]">{point.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default WhyTaptop;
