import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Distributors Wanted — orders2me",
  description:
    "Join the orders2me partner network. Zero upfront cost, full training, uncapped commissions and residuals.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}