import type { Metadata, Viewport } from "next";
import { EB_Garamond, JetBrains_Mono, Noto_Sans } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import { Shell } from "@/components/shell";
import "./globals.css";

const display = EB_Garamond({
  variable: "--font-display",
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700"],
});

const sans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Hellas Orbit · Ελλάδα σε τροχιά",
  description:
    "Δωρεάν πίνακας για Έλληνες στην Ελλάδα και το εξωτερικό: ο δρ Αδριανός Γολέμης, ESA, ελληνικοί δορυφόροι και η πρώτη πτήση σε τροχιά.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#04070f",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="el"
     
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <I18nProvider>
          <Shell>{children}</Shell>
        </I18nProvider>
      </body>
    </html>
  );
}
