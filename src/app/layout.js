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
  description: "Ranked list of cybersecurity writers, services, and strategy insights by Content Visit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="header">
          <div className="container header-content">
            <Link href="/" className="logo">🔒 CyberSecStats</Link>
            <nav className="user-menu">
              <Link href="/">Home</Link>
              <Link href="/publishers">Publishers</Link>
              <Link href="/agencies">Agencies</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
