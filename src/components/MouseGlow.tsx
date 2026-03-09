'use client';

import { useEffect, useState } from 'react';

export default function MouseGlow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    if (!mounted) return null;

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition-duration-300"
            style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
            }}
        />
    );
}
