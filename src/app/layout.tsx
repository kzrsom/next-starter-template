import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Southeast State | Self-Governance Platform",
  description:
    "A peaceful civic advocacy platform for self-determination, dialogue, and democratic reform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
