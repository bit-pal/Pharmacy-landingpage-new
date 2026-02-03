import type { Metadata } from "next";
import "./globals.css";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: "MediTrue",
  description: "ED, Weight Loss, & Hair Loss Experts. Professional online pharmacy with free tracked delivery and lowest UK price guarantee.",
  keywords: "pharmacy, erectile dysfunction, weight loss, hair loss, premature ejaculation, UK pharmacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        {children}
        <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      </body>
    </html>
  );
}
