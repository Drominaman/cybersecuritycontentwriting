import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cybersecurity Content Writing Service Guide",
  description: "Ranked list of cybersecurity writers, content marketing services, and strategy insights by cybersecurity marketing agency Content Visit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Skip link for accessibility */}
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>

        {/* Site header */}
        <header className="bg-blue-600 text-white">
          <nav className="w-full px-4 py-4 flex items-center justify-center gap-8 navbar">
            <Link href="/" className="text-2xl font-bold">
              Cybersecurity Content Writer Guide
            </Link>
            <Link href="/content-examples" className="text-lg font-bold hover:underline">
              Content Examples
            </Link>
          </nav>
        </header>

        {/* Main content area */}
        <main id="main" className="bg-white bg-opacity-90 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl w-full px-6 py-12">
          {children}
        </main>

        {/* Global footer */}
        <footer className="bg-gray-50 py-12">
          <div className="w-full text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Content Visit. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
