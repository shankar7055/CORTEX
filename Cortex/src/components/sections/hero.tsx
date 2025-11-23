"use client";

import Image from 'next/image';
import Link from 'next/link';
import { HeroFuturisticBackground } from '@/components/ui/hero-futuristic';
import { DemoBackground } from '@/components/ui/demo';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className={`relative h-svh bg-[var(--color-accent-primary)] overflow-hidden`}>
      <div className="absolute inset-0 hidden lg:block">
        <HeroFuturisticBackground className="w-full h-full" />
      </div>
      <div className="absolute inset-0 lg:hidden">
        <DemoBackground className="w-full h-full" />
      </div>

      <motion.div className="absolute left-6 md:left-12 lg:left-20 bottom-8 md:bottom-12 z-[60]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-white h1 uppercase font-extrabold leading-[0.9]">
          <span className="block fade-in" style={{ animationDelay: '0.1s' }}>Operate</span>
          <span className="block fade-in" style={{ animationDelay: '0.23s' }}>Smarter</span>
          <span className="block fade-in" style={{ animationDelay: '0.36s' }}>Sell Faster</span>
        </h1>
      </motion.div>

      <motion.p className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[60] text-mono-label text-white/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>[SCROLL]</motion.p>

      <motion.div className="absolute right-6 md:right-12 lg:right-20 bottom-8 md:bottom-12 z-[60] flex flex-col items-start gap-3" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
        <p className="text-mono-label text-white uppercase text-left tracking-[0.08em] leading-[1.2] max-w-[440px]">
          LEARN TO BUILD WEBSITES<br />
          OF ANY COMPLEXITY ON<br />
          TAPTOP — FROM ZERO TO PRO
        </p>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" prefetch className="inline-flex items-center h-12 px-6 rounded-md bg-white text-black hover:bg-accent-secondary transition-colors">
            <span className="text-mono-label tracking-[0.08em]">PUSH ME UP</span>
          </Link>
          <div className="w-11 h-11 flex items-center justify-center bg-white rounded-md">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a190a3d1-0e74-4981-86fa-6d6025c2ae8a-izum-study/assets/svgs/btn_dots-5.svg"
              alt="dots"
              width={18}
              height={4}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
