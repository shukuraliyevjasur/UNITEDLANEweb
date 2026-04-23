import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers | United Lane LLC",
    description: "Join our elite team of professional Class A CDL drivers. We offer high pay, late-model trucks, and a driver-first culture in Northfield, OH.",
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}