"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/#about-us", label: "About Us" },
  { href: "/#contact", label: "Contact Us" },
];

const mobileNavLinks: NavLink[] = [
  { href: "/#about-us", label: "about us" },
  { href: "/dashboard", label: "dashboard" },
  { href: "/#features", label: "features" },
  { href: "/#reviews", label: "reviews" },
  { href: "/#faq", label: "faq" },
  { href: "/#contact", label: "contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[101] px-4 pt-4 lg:px-6 lg:pt-6">
        <motion.div className="mx-auto w-full lg:w-fit lg:rounded-lg lg:bg-black/90 lg:backdrop-blur-md lg:shadow-lg lg:border lg:border-white/10" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex items-center justify-between lg:justify-between gap-4 lg:gap-8 py-2.5 lg:py-3 px-4 lg:px-8">
            <a href="#iqt90ynf3_0" className="flex items-center gap-3">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a190a3d1-0e74-4981-86fa-6d6025c2ae8a-izum-study/assets/svgs/logo-3.svg"
                alt="Izum.study Logo"
                width={20}
                height={20}
                className="filter invert brightness-0"
              />
              <span className="text-menu text-white">CORTEX</span>
            </a>

            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} prefetch className="group flex items-center gap-2">
                  <div className="h-[6px] w-[6px] rounded-full bg-white/80" />
                  <span className="text-menu text-white">{link.label}</span>
                </Link>
              ))}
            </nav>

            <button
              onClick={toggleMenu}
              className="relative z-[101] h-10 w-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative h-4 w-4">
                <span className={`absolute left-1/2 block h-[1.5px] w-4 -translate-x-1/2 bg-white transition-all duration-300 ease-in-out`} style={{ top: isMenuOpen ? '50%' : '2px', transform: isMenuOpen ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, 0) rotate(0deg)' }} />
                <span className={`absolute top-1/2 left-1/2 block h-[1.5px] w-4 -translate-x-1/2 -translate-y-1/2 bg-white transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-1/2 block h-[1.5px] w-4 -translate-x-1/2 bg-white transition-all duration-300 ease-in-out`} style={{ top: isMenuOpen ? '50%' : '14px', transform: isMenuOpen ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, 0) rotate(0deg)' }} />
              </div>
            </button>
          </div>
        </motion.div>
      </header>

      <motion.div className={`fixed inset-0 z-[100] bg-black transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} initial={{ opacity: 0 }} animate={{ opacity: isMenuOpen ? 1 : 0 }}>
        <div className="container mx-auto flex h-full flex-col justify-between px-6 pt-32 pb-12 md:px-12 lg:px-20">
          <nav className="flex flex-col items-start gap-y-1 sm:gap-y-2">
            {mobileNavLinks.map((link) => (
              <motion.div key={link.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                <Link href={link.href} prefetch onClick={closeMenu} className="group flex items-center gap-4 text-white">
                  <div className="h-2.5 w-2.5 shrink-0 rounded-full border border-white bg-transparent transition-colors duration-300 group-hover:bg-white" />
                  <span className="h2 lowercase">{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="text-link text-white">
            <div className="flex items-center gap-2">
              <span className="opacity-90">support:</span>
              <a href="mailto:support@cortex.ai" className="hover:underline">support@cortex.ai</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-90">sales:</span>
              <a href="mailto:sales@cortex.ai" className="hover:underline">sales@cortex.ai</a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Header;
