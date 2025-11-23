"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

const DottedCircle = ({
  className,
  dashArray = "1, 14",
  strokeWidth = "3",
  radius = 198,
  style,
}: {
  className?: string;
  dashArray?: string;
  strokeWidth?: string;
  radius?: number;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    preserveAspectRatio="xMidYMid meet"
  >
    <circle
      cx="200"
      cy="200"
      r={radius}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={dashArray}
    />
  </svg>
);

const PricingSection = () => {
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
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <section id="i16lv2od1_0" className="bg-background text-text-primary py-20 lg:py-40 font-sans overflow-hidden">
      <div className="container">
        <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {/* Left Column */}
          <div className="lg:col-span-8 pb-16 lg:pb-0">
            <motion.div className="flex flex-col" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-label text-black/65 mb-5">[PLAN PRICE]</p>
              <h2 className="h2 mb-2">₹1,500 / MONTH</h2>
              <p className="text-mono-label text-black/65">[90-DAY TERM]</p>
              
              <div className="relative mt-20 lg:mt-[140px] h-[300px] sm:h-[350px] md:h-[400px] w-full">
                <div className="absolute inset-0 flex items-center justify-center text-black/20">
                    <DottedCircle
                      radius={198}
                      className="absolute h-full w-auto transform-gpu -translate-x-[26%]"
                      style={{ transform: `rotate(${angle}deg)`, transformOrigin: "50% 50%", transition: "transform 2000ms ease-out" }}
                    />
                    <DottedCircle
                      radius={198}
                      className="absolute h-full w-auto transform-gpu translate-x-[26%]"
                      style={{ transform: `rotate(${-angle}deg)`, transformOrigin: "50% 50%", transition: "transform 2000ms ease-out" }}
                    />
                </div>
                
                <div className="absolute inset-0">
                    <div className="relative w-full h-full max-w-4xl mx-auto"> 
                        {/* Guide Labels */}
                        <p className="text-mono-label text-black/65 absolute top-1/2 -left-2 md:left-0 lg:-left-4 transform-gpu -translate-y-1/2 -rotate-90 origin-center">[WHAT YOU KNOW]</p>
                        <p className="text-mono-label text-black/65 absolute top-[5%] left-1/2 -translate-x-1/2">[WHAT WE ACHIEVE TOGETHER]</p>
                        <p className="text-mono-label text-black/65 absolute top-1/2 -right-2 md:right-0 lg:-right-4 transform-gpu -translate-y-1/2 rotate-90 origin-center">[WHAT WE KNOW]</p>

                        {/* STUDY labels */}
                        <p className="text-mono-label text-black/65 absolute top-[22%] left-[calc(50%-130px)]">[s.]</p>
                        <p className="text-mono-label text-accent-primary absolute top-[12%] left-1/2 -translate-x-1/2">[t.]</p>
                        <p className="text-mono-label text-black/65 absolute top-[22%] right-[calc(50%-130px)]">[u.]</p>
                        <p className="text-mono-label text-accent-primary absolute top-[50%] left-[calc(50%-215px)]">[d.]</p>
                        <p className="text-mono-label text-black/65 absolute top-[50%] right-[calc(50%-215px)]">[y.]</p>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 lg:border-l lg:border-black/10 lg:pl-12 pt-8 lg:pt-0">
            <motion.div className="flex justify-between items-start mb-16" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-mono-label text-black/65">[LET'S GO]</p>
              <div className="w-2 h-2 bg-black rounded-full mt-1"></div>
            </motion.div>

            <motion.div className="flex flex-col space-y-4 mb-12" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
                <motion.p className="text-mono-label" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>/ L [LEARN]</motion.p>
                <motion.p className="text-mono-label" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>/ L [LEVEL-UP]</motion.p>
                <motion.p className="text-mono-label" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>/ L [LAUNCH WONDERS]</motion.p>
            </motion.div>
            
            <motion.p className="text-body text-black/90 uppercase mb-12 max-w-[320px]" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              START YOUR JOURNEY AND UNLOCK NEW POSSIBILITIES — BUILD SOMETHING AMAZING!
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Link href="/dashboard" prefetch className="inline-flex items-center group bg-black">
                <div className="h-12 flex items-center justify-center pl-8 pr-6">
                  <span className="text-btn text-white">let's go</span>
                </div>
                <div className="h-12 w-12 flex items-center justify-center relative">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a190a3d1-0e74-4981-86fa-6d6025c2ae8a-izum-study/assets/svgs/btn_dots_white-1.svg"
                    alt="animated dots"
                    width={24}
                    height={24}
                    className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  />
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
