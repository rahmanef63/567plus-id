import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import { FlickeringGridDemo } from "@/components/ui/Bg-grid";

// Import Inter once and assign it to the custom CSS variable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "567plus",
  description: "laundry 567plus terdekat dan tercepat",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Any other head content */}
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <FlickeringGridDemo />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
