import type { Metadata } from "next";

/**
 * The Metadata is handled here because this is a Server Component.
 * This keeps SEO happy while allowing the page.tsx to be a Client Component for animations.
 */
export const metadata: Metadata = {
    title: "About Us | United Lane LLC",
    description: "Learn about the heritage, values, and asset-based reliability of United Lane LLC, headquartered in Northfield, OH.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // We simply render the children. 
        // The root layout already handles the Navbar and Footer.
        <>
            {children}
        </>
    );
}