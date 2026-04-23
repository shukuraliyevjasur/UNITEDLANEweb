import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="bg-gray-50 py-24 sm:py-32">
            <div className="container mx-auto px-6 text-center lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
                        Ready to move freight or grow your career?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                        Partner with a carrier that delivers on every promise. Let's talk about how we can work together.
                    </p>

                    <div className="mt-12 flex flex-col items-center justify-center gap-4">
                        <Button
                            asChild
                            className="w-full max-w-md h-[60px] bg-navy text-lg font-bold text-white shadow-lg transition-all hover:bg-navy-dark hover:-translate-y-1"
                        >
                            <Link href="/contact">
                                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="w-full max-w-md h-[60px] border-2 border-navy text-lg font-bold text-navy transition-all hover:bg-navy hover:text-white"
                        >
                            <Link href="/careers/apply">
                                Apply to Drive
                            </Link>
                        </Button>
                    </div>

                    <p className="mt-8 text-sm text-gray-400">
                        Same-day response guaranteed • No obligations
                    </p>
                </div>
            </div>
        </section>
    );
}
