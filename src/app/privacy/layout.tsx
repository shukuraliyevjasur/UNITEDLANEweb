import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | United Lane LLC",
    description: "Review the United Lane LLC privacy policy, data collection practices, and SMS terms and conditions.",
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}