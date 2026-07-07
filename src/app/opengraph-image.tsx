import { ImageResponse } from 'next/og';
import { profile } from '@/data/portfolio';

export const dynamic = 'force-static';
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '80px',
                    backgroundColor: '#0f172a',
                    color: '#e2e8f0',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        marginBottom: 28,
                    }}
                >
                    <div style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: '#2dd4bf', display: 'flex' }} />
                    <div style={{ fontSize: 26, color: '#5eead4', letterSpacing: 2, textTransform: 'uppercase', display: 'flex' }}>
                        Software Engineer
                    </div>
                </div>
                <div style={{ fontSize: 88, fontWeight: 700, color: '#f1f5f9', lineHeight: 1.1, display: 'flex' }}>
                    {profile.name}
                </div>
                <div style={{ fontSize: 34, color: '#94a3b8', marginTop: 24, maxWidth: 900, display: 'flex' }}>
                    {profile.headline}
                </div>
            </div>
        ),
        { ...size }
    );
}
