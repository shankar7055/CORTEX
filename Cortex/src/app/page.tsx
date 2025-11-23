"use client";

import { useState, useEffect } from "react";
import Preloader from "@/components/sections/preloader";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import WhyTaptop from "@/components/sections/why-taptop";
import YourStepsSection from "@/components/sections/your-steps";
import PricingSection from "@/components/sections/pricing";
import CurriculumSection from "@/components/sections/curriculum";
import ProjectShowcase from "@/components/sections/project-showcase";
import WhoWeAreSection from "@/components/sections/who-we-are";
import TrustSection from "@/components/sections/trust-section";
import Testimonials from "@/components/sections/testimonials";
import FaqSection from "@/components/sections/faq";
import ContactForm from "@/components/sections/contact-form";
 
import LegalDocumentsModal from "@/components/modals/legal-documents-modal";
import { motion } from "framer-motion";

export default function Home() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderDone(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isPreloaderDone && <Preloader />}
      
      <div className={`${!isPreloaderDone ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Header />
        
        <main className="relative">
          <HeroSection />
          
          <WhyTaptop />
          
          <YourStepsSection />
          
          <PricingSection />
          
          <CurriculumSection />
          
          <ProjectShowcase />
          
          <WhoWeAreSection />
          
          <TrustSection />
          
          <Testimonials />
          
          <FaqSection />
          
          <ContactForm />
          
          
        </main>

        <footer className="bg-background border-t border-border-subtle">
          <div className="container py-14 md:py-20">
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex flex-col gap-3">
                <h3 className="text-menu text-text-secondary">Cortex</h3>
                <p className="text-body text-text-secondary max-w-md">
                  AI-powered e‑commerce ops: automate sales, finance, inventory, compliance, and customer workflows.
                </p>
              </div>

              <nav aria-label="Quick Links" className="flex flex-col gap-3">
                <h3 className="text-menu text-text-secondary">Quick Links</h3>
                <motion.ul className="flex flex-col gap-2" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
                  {[
                    { href: "#day-overview", label: "Overview" },
                    { href: "#features", label: "Features" },
                    { href: "#i16lv2od1_0", label: "Pricing" },
                    { href: "#reviews", label: "Reviews" },
                    { href: "#faq", label: "FAQ" },
                    { href: "#contact", label: "Contact" },
                  ].map((l) => (
                    <motion.li key={l.href} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <a href={l.href} className="text-link text-text-primary hover:text-accent-primary transition-colors">{l.label}</a>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              <nav aria-label="Resources" className="flex flex-col gap-3">
                <h3 className="text-menu text-text-secondary">Resources</h3>
                <ul className="flex flex-col gap-2">
                  <li>
                    <button onClick={() => setIsLegalModalOpen(true)} className="text-left text-link text-text-primary hover:text-accent-primary transition-colors">
                      Legal documents
                    </button>
                  </li>
                  <li><a href="#dashboard" className="text-link text-text-primary hover:text-accent-primary transition-colors">Dashboard</a></li>
                  <li><a href="#about-us" className="text-link text-text-primary hover:text-accent-primary transition-colors">About</a></li>
                </ul>
              </nav>

              
            </motion.div>

            <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-label text-text-secondary">© {new Date().getFullYear()} Cortex. All rights reserved.</p>
              <div className="flex items-center gap-6"></div>
            </div>
          </div>
        </footer>

        <LegalDocumentsModal 
          isOpen={isLegalModalOpen}
          onClose={() => setIsLegalModalOpen(false)}
        />
      </div>
    </>
  );
}
