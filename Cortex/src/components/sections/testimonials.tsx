"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonialsData = [
  {
    quote: "CORTEX AUTOMATED OUR SALES, FINANCE, AND INVENTORY IN WEEKS.",
    name: "ALEX JOHNSON",
    image: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "DAY‑WISE OVERVIEW AND AUTO INVOICES SAVED HOURS EVERY DAY.",
    name: "MICHAEL CARTER",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "COMPETITOR ANALYTICS AND GROWTH INSIGHTS BOOSTED OUR STORE.",
    name: "RAHUL MEHTA",
    image: "https://images.unsplash.com/flagged/photo-1553642618-de0381320ff3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonials = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const numItems = testimonialsData.length;

    return (
        <section id="reviews" className="bg-background py-20 lg:py-32">
            <div className="container">
                <motion.div className="flex justify-between items-end mb-12" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <p className="text-label text-text-secondary">[GREAT GRADUATES]</p>
                    <div className="hidden lg:flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-black"></div>
                        <div className="w-2 h-2 rounded-full bg-black"></div>
                    </div>
                </motion.div>

                <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="w-full">
                    <CarouselContent className="-ml-6">
                        {testimonialsData.map((testimonial, index) => (
                            <CarouselItem key={index} className="pl-6 md:basis-2/3 lg:basis-1/2">
                                <motion.div className="p-8 bg-bg-secondary rounded-xl h-full flex flex-col justify-between relative min-h-[280px] md:min-h-[320px]" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                    <Image
                                        src={testimonial.image}
                                        alt={`Avatar of ${testimonial.name}`}
                                        width={80}
                                        height={80}
                                        unoptimized
                                        className="absolute top-8 right-8 rounded-md"
                                    />
                                    <blockquote className="text-body font-medium uppercase text-text-primary pr-[96px] pb-16">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div className="flex justify-start items-center text-mono-label">
                                        <p className="text-text-secondary opacity-65">[{testimonial.name}]</p>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center items-center gap-6 mt-12 md:mt-16">
                        <CarouselPrevious className="relative w-12 h-12 rounded-full border border-border bg-transparent hover:bg-zinc-100 static translate-x-0 translate-y-0 text-text-primary">
                            <ChevronLeft className="h-6 w-6" />
                        </CarouselPrevious>
                        <div className="flex gap-2.5 items-center">
                            {Array.from({ length: numItems }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => api?.scrollTo(index)}
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-all duration-300",
                                        current === index ? "bg-black scale-125" : "bg-neutral-300"
                                    )}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        <CarouselNext className="relative w-12 h-12 rounded-full border border-border bg-transparent hover:bg-zinc-100 static translate-x-0 translate-y-0 text-text-primary">
                            <ChevronRight className="h-6 w-6" />
                        </CarouselNext>
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default Testimonials;
import { motion } from "framer-motion";
