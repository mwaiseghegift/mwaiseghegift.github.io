import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' });

export const metadata: Metadata = {
  title: 'Gift Mwaiseghe',
  description: 'Gift Mwaiseghe is a Software Developer passionate about crafting fast, accessible, and beautiful digital experiences.',
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
