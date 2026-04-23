import { Clock, Truck, MapPin, Shield, Cpu, MessageSquare } from "lucide-react";

const features = [
    {
        title: "On-Time Performance",
        description: "Industry-leading delivery rates backed by real data and accountability.",
        icon: Clock,
    },
    {
        title: "Asset-Based Capacity",
        description: "Our own fleet of 70+ trucks means consistent capacity when the market tightens.",
        icon: Truck,
    },
    {
        title: "Live GPS Visibility",
        description: "Real-time tracking and proactive updates throughout every shipment.",
        icon: MapPin,
    },
    {
        title: "Safety-First Culture",
        description: "Top CSA scores and a team committed to protecting your freight.",
        icon: Shield,
    },
    {
        title: "Technology That Delivers",
        description: "Advanced systems powered by DAT that optimize routing and visibility.",
        icon: Cpu,
    },
    {
        title: "Proactive Communication",
        description: "Updates before you ask — we keep you informed at every step.",
        icon: MessageSquare,
    },
];

export function WhyChoose() {
    return (
        <section className="bg-gray-50 py-24 sm:py-32">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
                        Why Companies Choose United Lane
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Built on reliability, powered by innovation, and committed to your success.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-7xl">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group relative rounded-2xl bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold leading-7 text-navy">
                                    {feature.title}
                                </h3>
                                <p className="mt-4 text-base leading-7 text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
