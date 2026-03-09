import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' });

export const metadata: Metadata = {
  metadataBase: new URL('https://mwaiseghegift.vercel.app'),
  title: {
    default: 'Gift Mwaiseghe | Software Engineer & Full Stack Developer',
    template: '%s | Gift Mwaiseghe',
  },
  description: 'Gift Mwaiseghe is a Software Engineer based in Kenya, specializing in building scalable backend architectures and high-performance web applications using Python (Django), .NET Core, and React/Next.js.',
  keywords: [
    'Gift Mwaiseghe',
    'Software Engineer',
    'Full Stack Developer',
    'Kenya',
    'Nyeri',
    'Python Developer',
    'Django Expert',
    '.NET Core Developer',
    'React Developer',
    'Next.js Portfolio',
    'API Development',
    'DevOps Engineer',
    'Software Quality Assurance',
    'Tech Blogger',
    'Frontend Developer',
    'Backend Developer',
    'Cloud Computing',
    'React',
    'Next.js',
    'Django',
    '.NET Core',
    'Angular',
  ],
  authors: [{ name: 'Gift Mwaiseghe', url: 'https://github.com/mwaiseghegift' }],
  creator: 'Gift Mwaiseghe',
  openGraph: {
    title: 'Gift Mwaiseghe | Software Engineer & Full Stack Developer',
    description: 'Explore the portfolio of Gift Mwaiseghe, a Software Engineer expert in Python, .NET, and modern web technologies.',
    url: 'https://mwaiseghegift.vercel.app',
    siteName: 'Gift Mwaiseghe Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Gift Mwaiseghe - Software Engineer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gift Mwaiseghe | Software Engineer & Full Stack Developer',
    description: 'Software Engineer specializing in scalable backend architectures and modern web applications.',
    creator: '@itsregalo',
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
