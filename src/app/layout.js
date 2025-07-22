// import custom fonts using standard CSS instead
import "./globals.css";
import Link from 'next/link';


export const metadata = {
  metadataBase: new URL('https://www.cybersecuritycontentwriting.com'),
  title: {
    default: "Cybersecurity Content Writing Service Guide",
    template: "%s | Cybersecurity Content Writing",
  },
  description: "The best Cybersecurity Content Writer Service on the market thanks to a combination of expert human led content writing, strategy and data.",
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-gray-100">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black">
          Skip to main content
        </a>
        
        <div className="flex flex-col min-h-screen">
          <header className="bg-blue-600 text-white sticky top-0 z-30 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="flex items-center justify-center gap-8 h-16">
                <Link href="/" className="text-base md:text-lg font-semibold hover:opacity-90 transition-opacity">
                  Cybersecurity Content Writing
                </Link>

                <div className="md:hidden">
                  <details className="relative group">
                    <summary className="list-none cursor-pointer p-2 -mr-2" aria-label="Open main menu">
                      <svg className="h-7 w-7 group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                      </svg>
                      <svg className="h-7 w-7 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </summary>
                    <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white text-blue-600 rounded-md shadow-lg z-50 py-2">
                      <Link href="/content-examples" className="block px-4 py-3 text-lg font-semibold hover:bg-blue-50">Content Examples</Link>
                      <Link href="/content-services" className="block px-4 py-3 text-lg font-semibold hover:bg-blue-50">Cybersecurity Content Writing Service</Link>
                    </div>
                  </details>
                </div>

                <div className="hidden md:flex items-center gap-12">
                  <Link href="/content-examples" className="px-3 py-2 text-lg font-medium rounded-md hover:bg-blue-700 transition-colors">
                    Content Examples
                  </Link>
                  <Link href="/content-services" className="px-3 py-2 text-lg font-medium rounded-md hover:bg-blue-700 transition-colors">
                    Cybersecurity Content Writer Service
                  </Link>
                </div>
              </nav>
            </div>
          </header>

          <main id="main" className="flex-grow px-4 sm:px-6 lg:px-8 space-y-24">
            {children}
          </main>

          <footer className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
              &copy; {year} Content Visit. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
