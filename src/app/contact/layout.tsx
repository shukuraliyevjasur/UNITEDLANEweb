import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | United Lane LLC",
    description: "Reach out to United Lane for freight quotes, logistics inquiries, or driver support. Our Northfield-based dispatch team is available 24/7.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}