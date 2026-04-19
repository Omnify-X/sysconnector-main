import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  title:
    'sysConnector — Built for teams who never want to lose a lead or lose track of their customers',
  description:
    'Built for teams who never want to lose a lead — or lose track of their customers',
  openGraph: {
    title:
      'sysConnector — Built for teams who never want to lose a lead or lose track of their customers',
    description:
      'Built for teams who never want to lose a lead — or lose track of their customers',
    url: 'https://sysconnector.com',
    siteName: 'sysConnector',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sysConnector',
    description:
      'Built for teams who never want to lose a lead — or lose track of their customers',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://sysconnector.com' },
};

/**
 * Inline script that runs before render to prevent a flash of the wrong theme.
 * Reads `sysconnector-theme` from localStorage, falls back to system preference.
 */
const themeInitScript = `
(function(){try{
  var stored = localStorage.getItem('sysconnector-theme');
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var useDark = stored === 'dark' || (stored === null && prefersDark);
  if (useDark) document.documentElement.classList.add('dark');
}catch(e){}})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
