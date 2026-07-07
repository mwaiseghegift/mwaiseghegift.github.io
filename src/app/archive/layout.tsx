import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Project Archive',
    description: 'Full catalogue of software projects by Gift Mwaiseghe — Angular, React, Django, .NET Core, and Node.js applications built for clients and personal use.',
    alternates: {
        canonical: '/archive',
    },
};

export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
    return children;
}
