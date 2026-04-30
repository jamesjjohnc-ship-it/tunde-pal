import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contract Agreement | D&H Partners LLC",
  description: "Apply and sign the Contract Agreement to join D&H Partners LLC as a Financial Representative.",
  openGraph: {
    title: "Contract Agreement | D&H Partners LLC",
    description: "Apply and sign the Contract Agreement to join D&H Partners LLC as a Financial Representative.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contract Agreement | D&H Partners LLC",
  },
};

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
