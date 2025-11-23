"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { href: '#hero', label: 'taptop' },
  { href: '#program', label: 'program' },
  { href: '#price', label: 'price' },
  { href: '#result', label: 'Result' },
  { href: '#who-we-are', label: 'Who we are' },
  { href: '#reviews', label: 'reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacts', label: 'Contacts' },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 bg-black text-white z-50 transform transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div className="container h-full mx-auto flex flex-col">
        <header className="flex justify-end pt-6 flex-shrink-0">
          <button onClick={onClose} aria-label="Close menu" className="p-2 -mr-2">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a190a3d1-0e74-4981-86fa-6d6025c2ae8a-izum-study/assets/images/close-14.svg"
              width={24}
              height={24}
              alt="Close icon"
            />
          </button>
        </header>

        <main className="flex-grow flex flex-col justify-center overflow-y-auto">
          <nav className="my-auto">
            <ul className="flex flex-col items-start space-y-4 md:space-y-2">
              {menuItems.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={onClose}
                    className="group flex items-center gap-x-5 py-1"
                  >
                    <span className="w-2.5 h-2.5 bg-white rounded-full transition-colors duration-300 group-hover:bg-accent-primary" />
                    <span className="h2 text-white transition-colors duration-300 group-hover:text-accent-primary">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </main>

        <footer className="pb-8 text-link flex-shrink-0">
          <div className="flex items-center gap-x-2">
            <span className="text-neutral-400">channel:</span>
            <a
              href="https://t.me/izum_study"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent-primary transition-colors"
            >
              @izum_study
            </a>
          </div>
          <div className="flex items-center gap-x-2 mt-2">
            <span className="text-neutral-400">For questions:</span>
            <a
              href="https://t.me/Dzimitry1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent-primary transition-colors"
            >
              @Dzimitry1
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MobileMenu;