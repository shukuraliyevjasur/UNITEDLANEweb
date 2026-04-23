"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MapPin, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <div className="relative flex min-h-[calc(100vh-80px)] flex-col lg:flex-row overflow-hidden bg-navy pt-[80px]">

            {/* Left Content Side */}
            <div className="flex w-full flex-col justify-center bg-gradient-to-br from-navy to-navy-dark px-6 py-20 lg:w-1/2 lg:px-16 xl:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="mb-2 text-5xl font-extrabold leading-[1.1] text-white sm:text-6xl md:text-[3.5rem]">
                        Moving America
                    </h1>
                    <h2 className="mb-8 text-5xl font-extrabold leading-[1.1] text-red-600 sm:text-6xl md:text-[3.5rem]">
                        With Pride & Precision
                    </h2>

                    <p className="mb-10 max-w-lg text-lg leading-relaxed text-gray-300">
                        United Lane is a premier asset-based carrier dedicated to providing reliable freight solutions across the nation. Join our team or ship with confidence.
                    </p>

                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <Button
                            asChild
                            className="group h-[54px] rounded-lg bg-red-600 px-10 text-base font-bold text-white shadow-[0_4px_14px_rgba(220,38,38,0.4)] transition-all hover:bg-red-700 hover:-translate-y-0.5"
                        >
                            <Link href="/contact">
                                Get a Quote <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="h-[54px] rounded-lg border-2 border-white bg-transparent px-10 text-base font-bold text-white transition-all hover:bg-white hover:text-navy hover:border-white"
                        >
                            <Link href="/careers">
                                Drive for Us
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center gap-8">
                        {[
                            { text: "Nationwide Coverage", icon: MapPin },
                            { text: "24/7 Support", icon: Clock },
                            { text: "Real-Time Tracking", icon: Shield },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 text-gray-300">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600/20">
                                    <item.icon className="h-4 w-4 text-red-600" />
                                </div>
                                <span className="text-sm font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Image Side */}
            <div className="relative min-h-[400px] w-full bg-navy lg:min-h-auto lg:w-1/2">
                <div className="absolute inset-0 bg-navy/10 z-10" />
                {/* Placeholder for real truck image - using a colored div for now to represent the image area visually */}
                <div className="h-full w-full bg-gray-800 object-cover relative">
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xl font-bold p-8 text-center border-4 border-white/5 m-8 border-dashed rounded-xl">
                        [Modern Semi-Truck on Highway Image Placeholder]
                    </div>
                    {/* When image generation works, replace with: 
             <Image 
               src="/hero_truck_highway.jpg" 
               alt="United Lane Truck on Highway" 
               fill 
               className="object-cover"
               priority
             /> */}
                </div>
            </div>
        </div>
    );
}
