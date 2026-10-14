import type { Metadata, Viewport } from "next";
import { Mrs_Saint_Delafield, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const script = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script-face",
});

export const metadata: Metadata = {
  title: "Dakingo – Online Bakery",
  description:
    "Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${script.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
