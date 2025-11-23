"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    name: 'Sales & Customer Ops • Auto invoices',
    desktopImage: "https://i.pinimg.com/1200x/bb/7a/ee/bb7aeedb678a139d98d6f0281b8d29ae.jpg",
    mobileImage: "https://i.pinimg.com/1200x/bb/7a/ee/bb7aeedb678a139d98d6f0281b8d29ae.jpg",
    widthClass: 'min-w-[calc(100vw-48px)] md:min-w-[70vw] lg:w-[60vw] lg:min-w-[60vw] lg:max-w-[1100px]',
    heightClass: 'h-[50vh] md:h-[400px] lg:h-[574px]',
    url: '#',
  },
  {
    name: 'Financials • CA & ITR • Tax helpers',
    desktopImage: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mobileImage: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    widthClass: 'min-w-[60vw] md:min-w-[45vw] lg:w-[45vw] lg:min-w-[45vw] lg:max-w-[900px]',
    heightClass: 'h-[50vh] md:h-[400px] lg:h-[574px]',
    url: '#',
  },
  {
    name: 'Competitor analysis • Growth analysis',
    desktopImage: "https://images.unsplash.com/photo-1581464647113-0196a7dc232b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mobileImage: "https://images.unsplash.com/photo-1581464647113-0196a7dc232b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    widthClass: 'min-w-[calc(100vw-48px)] md:min-w-[70vw] lg:w-[60vw] lg:min-w-[60vw] lg:max-w-[1100px]',
    heightClass: 'h-[50vh] md:h-[400px] lg:h-[574px]',
    url: '#',
  },
  {
    name: 'Inventory automation • Website health triggers',
    desktopImage: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mobileImage: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    widthClass: 'min-w-[60vw] md:min-w-[45vw] lg:w-[45vw] lg:min-w-[45vw] lg:max-w-[900px]',
    heightClass: 'h-[50vh] md:h-[400px] lg:h-[574px]',
    url: '#',
  }
];

export default function ProjectShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const slides = Array.from(
      container.querySelectorAll('a.snap-start')
    ) as HTMLAnchorElement[];
    if (!slides.length) return;
    const offsets = slides.map((s) => s.offsetLeft).sort((a, b) => a - b);
    const x = container.scrollLeft;
    const eps = 4;
    let target = x;
    if (direction === 'left') {
      const prev = offsets.filter((o) => o < x - eps);
      target = prev.length ? prev[prev.length - 1] : offsets[0];
    } else {
      const next = offsets.find((o) => o > x + eps);
      target = next ?? offsets[offsets.length - 1];
    }
    container.scrollTo({ left: target, behavior: 'smooth' });
  };

  const ArrowButton = ({ direction, onClick, className }: { direction: 'left' | 'right', onClick: () => void, className?: string }) => {
    const isLeft = direction === 'left';
    return (
      <button
        onClick={onClick}
        aria-label={isLeft ? 'Scroll left' : 'Scroll right'}
        className={`z-20 w-12 h-12 bg-black rounded-full flex items-center justify-center transition-transform hover:scale-110 disabled:opacity-50 ${className}`}
      >
        {isLeft ? (
          <ChevronLeft className="h-6 w-6 text-white" />
        ) : (
          <ChevronRight className="h-6 w-6 text-white" />
        )}
      </button>
    );
  };

  return (
    <section id="i185tv3al_0" className="bg-white text-black py-[80px] md:py-[120px] lg:py-[200px] overflow-hidden">
      <div className="container">
        <motion.div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16 md:mb-20 lg:mb-[98px]" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="mb-8 lg:mb-0">
            <p className="text-mono-label mb-4" style={{ color: "rgba(0, 0, 0, 0.65)" }}>[OPERATIONS AUTOMATION]</p>
            <h2 className="font-medium text-[48px] md:text-[60px] lg:text-[72px] leading-[1] uppercase tracking-[-2.16px]">
              Automate your e‑com operations<br /> with Cortex
            </h2>
          </div>
          <div className="hidden lg:flex flex-shrink-0 gap-4">
            <ArrowButton direction="left" onClick={() => scroll('left')} />
            <ArrowButton direction="right" onClick={() => scroll('right')} />
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <div className="lg:hidden absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-3 z-20">
            <ArrowButton direction="left" onClick={() => scroll('left')} />
            <ArrowButton direction="right" onClick={() => scroll('right')} />
        </div>
        <motion.div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 lg:px-[80px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        >
          {projects.map((project, index) => (
            <motion.a key={index} href={project.url} className={`snap-start group flex-shrink-0 ${project.widthClass} ${project.heightClass}`} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                <video
                  poster={project.desktopImage}
                  className="hidden lg:block w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  muted
                  loop
                  playsInline
                ></video>
                <video
                  poster={project.mobileImage}
                  className="block lg:hidden w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  muted
                  loop
                  playsInline
                ></video>
                <div className="absolute bottom-6 left-6 bg-[rgba(26,26,26,0.65)] text-white text-body rounded-full px-4 py-2 backdrop-blur-[10px] whitespace-nowrap">
                  {project.name}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
