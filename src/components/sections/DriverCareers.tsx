import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Heart, Truck, Star } from "lucide-react";

export function DriverCareers() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-dark py-24 sm:py-32">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container relative mx-auto px-6 text-center lg:px-8">
                <div className="inline-block rounded-full border border-white/30 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    Driver Careers
                </div>

                <h2 className="mx-auto mt-8 max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    More than a job —<br />
                    a career with support
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                    Join a carrier that invests in your success with industry-leading pay, comprehensive benefits, top-tier equipment, and our performance-driven ELITE culture.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    {[
                        { text: "Competitive Pay", icon: DollarSign },
                        { text: "Full Benefits", icon: Heart },
                        { text: "Modern Equipment", icon: Truck },
                        { text: "ELITE Culture", icon: Star },
                    ].map((item) => (
                        <div
                            key={item.text}
                            className="flex items-center space-x-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm"
                        >
                            <item.icon className="h-4 w-4 text-red-500" />
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button
                        asChild
                        size="lg"
                        className="h-[56px] min-w-[200px] bg-red-600 px-8 text-base font-bold text-white shadow-lg transition-all hover:bg-red-700 hover:scale-105"
                    >
                        <Link href="/careers">
                            View Driver Benefits <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="h-[56px] min-w-[200px] border-2 border-white bg-transparent px-8 text-base font-bold text-white transition-all hover:bg-white hover:text-navy hover:border-white"
                    >
                        <Link href="/careers/apply">
                            Apply Now
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
