import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "Ranked list of cybersecurity writers, services, and strategy insights by Content Visit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Skip link for accessibility */}
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>

        {/* Global header with page title */}
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold">
              Cybersecurity Content Writer Guide
            </h1>
          </div>
        </header>

        {/* Main content area */}
        <main id="main" className="container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Global footer */}
        <footer className="bg-gray-50 py-6">
          <div className="container mx-auto px-4 text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Content Visit. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
