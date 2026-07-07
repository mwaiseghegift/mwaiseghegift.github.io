import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import { profile, contactInfo, workHistory, education } from '@/data/portfolio';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' });

const siteUrl = 'https://mwaiseghegift.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Gift Mwaiseghe | Software Engineer & Full Stack Developer',
    template: '%s | Gift Mwaiseghe',
  },
  description: 'Software Engineer based in Kenya specializing in scalable backend architecture and high-performance web apps with Python, Django, .NET Core, and React/Next.js.',
  alternates: {
    canonical: '/',
  },
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
    url: siteUrl,
    siteName: 'Gift Mwaiseghe Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gift Mwaiseghe | Software Engineer & Full Stack Developer',
    description: 'Software Engineer specializing in scalable backend architectures and modern web applications.',
    creator: '@itsregalo',
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
  verification: {
    google: 'EZEVU4LoXb2C7BkzxQg9WL-0Jjz9SX74Za330G8mugw',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  url: siteUrl,
  email: `mailto:${contactInfo.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: profile.city,
    addressCountry: profile.residence,
  },
  worksFor: {
    '@type': 'Organization',
    name: workHistory[0].company,
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: education[0].company,
  },
  knowsAbout: profile.techStack,
  sameAs: contactInfo.social
    .filter((s) => s.type !== 'email' && s.type !== 'whatsapp')
    .map((s) => s.link),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300/30 selection:text-teal-300`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
