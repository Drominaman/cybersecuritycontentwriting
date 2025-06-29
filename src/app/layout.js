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
          <nav className="w-full px-4 py-4 flex items-center justify-between gap-8 navbar relative">
            <Link href="/" className="text-2xl font-bold">
              Cybersecurity Content Writing Guide
            </Link>

            {/* Mobile menu logic should go in a client component. */}

            {/* Mobile Burger Menu */}
            <div className="md:hidden flex items-center">
              <details className="relative">
                <summary className="list-none cursor-pointer flex items-center justify-center h-10 w-10 rounded-full hover:bg-blue-700 transition-colors">
                  {/* Simple burger icon */}
                  <span className="block w-6 h-1 bg-white mb-1 rounded"></span>
                  <span className="block w-6 h-1 bg-white mb-1 rounded"></span>
                  <span className="block w-6 h-1 bg-white rounded"></span>
                </summary>
                <div className="absolute right-0 mt-2 w-48 bg-white text-blue-600 rounded shadow-lg z-50 py-2 flex flex-col">
                  <Link href="/content-examples" className="block px-4 py-3 text-lg font-bold hover:bg-blue-100">Content Examples</Link>
                  <Link href="/content-services" className="block px-4 py-3 text-lg font-bold hover:bg-blue-100">Content Services</Link>
                </div>
              </details>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/content-examples" className="text-lg font-bold hover:underline">
                Content Examples
              </Link>
              <Link href="/content-services" className="text-lg font-bold hover:underline">
                Content Services
              </Link>
            </div>
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
