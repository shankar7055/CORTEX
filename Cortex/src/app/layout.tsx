import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import localFont from "next/font/local";

const buildFontOne = localFont({
  src: "../../tDbV2o-flEEny0FZhsfKu5WU4xD7OwGtT0rU.woff2",
  variable: "--font-build-1",
  display: "swap",
  style: "normal",
});

const buildFontTwo = localFont({
  src: "../../NGSwv5HMAFg6IuGlBNMjxLsH8ahuQ2e8.woff2",
  variable: "--font-build-2",
  display: "swap",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Cortex",
  description: "AI-powered e‑commerce ops & growth",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${buildFontOne.variable} ${buildFontTwo.variable} antialiased`}>
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
