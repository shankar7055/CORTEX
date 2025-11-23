"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

const stepData = [
  {
    label: "[STEP 01.] INTEGRATION",
    description: "Connect Cortex to any e‑com backend (Shopify, WooCommerce, custom). Sync products, orders, customers, and inventory. Add OpenAI keys and configure webhooks.",
    hasButton: true,
  },
  {
    label: "[STEP 02.] AUTOMATION",
    description: "Enable automated sales management, day‑wise financials, CA work & ITR filing, tax deduction helpers, inventory triggers with owner emails, customer management, and automated invoices.",
    hasButton: false,
  },
  {
    label: "[STEP 03.] INSIGHTS & DASHBOARD",
    description: "Run competitor analysis via web scraping, e‑com growth and trend analysis, website health triggers, and automatic advertisements. Use the GenAI chatbot to query everything — all in one dashboard.",
    hasButton: false,
  },
];



const YourStepsSection = () => {
    return (
        <section id="day-overview" className="bg-background text-text-primary py-24 md:py-32 xl:py-40">
            <div className="container">
                <motion.div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 md:mb-20" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="mb-8 lg:mb-0">
                        <p className="text-mono-label text-black/60 mb-4">[DAY-WISE OVERVIEW]</p>
                        <motion.h2 className="h2 text-black/10" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            DAILY PERFORMANCE
                            <br />
                            SNAPSHOT
                        </motion.h2>
                    </div>
                    <div className="text-left lg:text-right text-mono-label text-black/60 space-y-2">
                        <p>[SALES, ORDERS, TRENDS]</p>
                        <p>[AUTO-UPDATED FROM YOUR BACKEND]</p>
                    </div>
                </motion.div>

                <motion.div className="flex flex-col" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
                    {stepData.map((step, index) => (
                        <motion.div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 py-8 border-t border-black/10" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div>
                                <p className="text-mono-label text-black/60">{step.label}</p>
                            </div>
                            <div>
                                <p className="text-body text-black/60 max-w-lg">{step.description}</p>
                                {step.hasButton && (
                                    <Link href="/chat" prefetch className="group inline-flex items-stretch border border-black hover:bg-black hover:text-white transition-colors duration-300 mt-8">
                                        <span className="text-btn uppercase pl-6 pr-4 py-4">READY TO START</span>
                                        <div className="w-12 h-auto flex items-center justify-center border-l border-black group-hover:border-white transition-colors duration-300">
                                            <Image
                                                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a190a3d1-0e74-4981-86fa-6d6025c2ae8a-izum-study/assets/svgs/btn_dots-5.svg"
                                                alt="dots icon"
                                                width={20}
                                                height={20}
                                                className="group-hover:invert"
                                            />
                                        </div>
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                
            </div>
        </section>
    );
};

export default YourStepsSection;
