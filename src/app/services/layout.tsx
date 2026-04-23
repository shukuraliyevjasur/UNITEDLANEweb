import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | United Lane LLC",
    description: "Asset-based dry van transportation, dedicated lanes, and expedited shipping solutions across 48 states with 99% on-time performance.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}