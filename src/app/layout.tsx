import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' });

export const metadata: Metadata = {
  metadataBase: new URL('https://mwaiseghe.dev'), // Update with actual domain when known
  title: {
    default: 'Gift Mwaiseghe | Software Developer',
    template: '%s | Gift Mwaiseghe',
  },
  description: 'Gift Mwaiseghe is a Software Developer passionate about crafting fast, accessible, and beautiful digital experiences with Angular, React, .NET Core, Django, and Node.js.',
  keywords: [
    'Gift Mwaiseghe',
    'Software Developer',
    'Full Stack Developer',
    'Frontend Engineer',
    'React',
    'Angular',
    'Next.js',
    '.NET Core',
    'Django',
    'Node.js',
    'Kenya',
    'Web Development',
  ],
  authors: [{ name: 'Gift Mwaiseghe', url: 'https://github.com/mwaiseghe' }],
  creator: 'Gift Mwaiseghe',
  openGraph: {
    title: 'Gift Mwaiseghe | Software Developer',
    description: 'Gift Mwaiseghe is a Software Developer passionate about crafting fast, accessible, and beautiful digital experiences.',
    url: 'https://mwaiseghe.dev', // Update with actual domain
    siteName: 'Gift Mwaiseghe Portfolio',
    images: [
      {
        url: '/og.png', // Fallback or setup dynamic OG image later if requested
        width: 1200,
        height: 630,
        alt: 'Gift Mwaiseghe Portfolio Overview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gift Mwaiseghe | Software Developer',
    description: 'Gift Mwaiseghe is a Software Developer passionate about crafting fast, accessible, and beautiful digital experiences.',
    creator: '@mwaiseghe', // Update with actual handle if exists
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300/30 selection:text-teal-300`}>
        {children}
      </body>
    </html>
  );
}
