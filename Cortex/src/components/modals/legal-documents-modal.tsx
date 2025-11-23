"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface LegalDocumentsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LegalDocumentsModal = ({ isOpen, onClose }: LegalDocumentsModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const DocumentButton = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-stretch bg-black rounded-md overflow-hidden text-white transition-transform duration-300 ease-out hover:scale-[1.02]"
    >
      <span className="flex-grow py-5 px-6 flex items-center text-btn">
        {label}
      </span>
      <div className="flex-shrink-0 w-[70px] flex items-center justify-center relative">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a190a3d1-0e74-4981-86fa-6d6025c2ae8a-izum-study/assets/svgs/btn_dots_white-1.svg"
          alt="dots icon"
          width={40}
          height={40}
        />
      </div>
    </a>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-in fade-in-0"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl w-full max-w-[560px] p-10 sm:p-12 md:p-16 relative animate-in fade-in-0 zoom-in-95 duration-300"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Close"
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a190a3d1-0e74-4981-86fa-6d6025c2ae8a-izum-study/assets/images/popup-close-13.svg"
            alt="Close"
            fill
            className="object-contain"
          />
        </button>

        <h2 className="text-big text-black">
          Legal
          <br />
          documents
        </h2>

        <div className="mt-8 flex flex-col gap-4">
          <DocumentButton
            href="/f/personal_data_processing_policy.pdf"
            label="Privacy Policy"
          />
          <DocumentButton
            href="/f/consent_to_processing_of_personal_data.pdf"
            label="User Agreement"
          />
        </div>
      </div>
    </div>
  );
};

export default LegalDocumentsModal;