'use client';

import { useEffect, useState } from 'react';

/**
 * Wraps page content and keeps it hidden (opacity:0) until the
 * Three.js preloader dispatches the 'preloader:done' event.
 * This prevents page content & animations from being visible
 * while the preloader is still running.
 */
export function PreloaderGate({ children }: { children: React.ReactNode }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onDone = () => setVisible(true);
        window.addEventListener('preloader:done', onDone);
        return () => window.removeEventListener('preloader:done', onDone);
    }, []);

    return (
        <div
            style={{
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.3s ease-out',
            }}
        >
            {children}
        </div>
    );
}
