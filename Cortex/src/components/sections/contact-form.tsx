"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  
  const textSize = "text-[32px] md:text-4xl lg:text-5xl";
  const asteriskSize = "text-[32px] md:text-4xl lg:text-5xl";

  return (
    <section id="contact" className="bg-white text-black pt-20 pb-24 lg:pt-[110px] lg:pb-[140px]">
      <div className="container">
        <motion.h2 className="text-mono-label opacity-65 mb-14 lg:mb-[65px]" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          [to: Cortex]
        </motion.h2>
        <form className="w-full">
          <motion.div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 mb-4" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <p className={`font-mono ${textSize} leading-tight`}>HEY, CORTEX!</p>
              <div className="inline-block self-center">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a190a3d1-0e74-4981-86fa-6d6025c2ae8a-izum-study/assets/svgs/logo_big_new-2.svg"
                  alt="Izum Study Logo"
                  width={52}
                  height={52}
                  className="w-[36px] h-[36px] lg:w-[52px] lg:h-[52px]"
                />
              </div>
              <p className={`font-mono ${textSize} leading-tight`}>MY NAME IS</p>
              <div className="w-full sm:w-auto">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`font-mono ${textSize} bg-transparent border-0 border-b border-black focus:ring-0 focus:outline-none focus:border-accent-primary w-full sm:w-[250px] leading-tight`}
                />
              </div>
            </div>
            <span className={`font-mono ${asteriskSize} text-accent-primary`}>*</span>
          </motion.div>

          <motion.div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 mb-4" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <p className={`font-mono ${textSize} leading-tight`}>MY PHONE NUMBER IS</p>
              <div className="w-full sm:w-auto">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`font-mono ${textSize} bg-transparent border-0 border-b border-black focus:ring-0 focus:outline-none focus:border-accent-primary w-full sm:w-[290px] leading-tight`}
                />
              </div>
              <p className={`font-mono ${textSize} leading-tight`}>AND MY</p>
            </div>
            <span className={`font-mono ${asteriskSize} text-accent-primary`}>*</span>
          </motion.div>
          
          <motion.div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <p className={`font-mono ${textSize} leading-tight`}>EMAIL IS</p>
              <div className="w-full sm:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`font-mono ${textSize} bg-transparent border-0 border-b border-black focus:ring-0 focus:outline-none focus:border-accent-primary w-full sm:w-[350px] leading-tight`}
                />
              </div>
              <p className={`font-mono ${textSize} leading-tight`}>SEE YOU SOON)</p>
            </div>
            <span className={`font-mono ${asteriskSize} text-accent-primary`}>*</span>
          </motion.div>

          <motion.div className="mt-12 lg:mt-16" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <label className="flex items-center cursor-pointer group w-fit">
              <input
                type="checkbox"
                id="privacy-policy"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="sr-only peer"
              />
              <span className="w-5 h-5 border border-black flex items-center justify-center shrink-0 peer-checked:bg-black transition-colors">
                <svg
                  width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className={`text-white transition-opacity ${agreed ? 'opacity-100' : 'opacity-0'}`}
                >
                  <path d="M1.33301 5.33333L4.66634 8.66667L11.333 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="ml-3 font-mono text-[13px] text-black/65">
                I agree to the Privacy Policy
              </span>
            </label>
          </motion.div>

          <motion.div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mt-10 lg:mt-[52px]" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <button type="submit" className="flex items-center h-12 bg-black text-white group shrink-0">
              <span className="font-sans text-[14px] font-semibold leading-none tracking-[0.05em] lowercase px-8">send</span>
              <div className="w-12 h-12 flex items-center justify-center bg-black relative overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a190a3d1-0e74-4981-86fa-6d6025c2ae8a-izum-study/assets/svgs/btn_dots_white-1.svg"
                  alt="dots"
                  width={18}
                  height={4}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </button>
            <a href="mailto:support@cortex.ai" className="font-mono text-2xl hover:text-accent-primary transition-colors">
              EMAIL SUPPORT
            </a>
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
