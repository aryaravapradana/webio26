'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Preloader() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // ── Setup renderer ──
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 1);

        let w = window.innerWidth;
        let h = window.innerHeight;
        renderer.setSize(w, h);

        // ── Orthographic camera (pixel-perfect positioning) ──
        const camera = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2, -100, 100);
        camera.position.z = 10;

        const scene = new THREE.Scene();

        // ── Load the logo texture — wait for it before animating ──
        const loader = new THREE.TextureLoader();
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 1 });
        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);

        // Render a black frame immediately so the canvas isn't transparent while loading
        renderer.render(scene, camera);

        loader.load('/assets/logo/logo-io.webp', (texture) => {
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            material.map = texture;
            material.needsUpdate = true;

            // ── Get actual image aspect ratio from loaded texture ──
            const imgWidth = texture.image.naturalWidth || texture.image.width;
            const imgHeight = texture.image.naturalHeight || texture.image.height;
            const logoAspect = imgWidth / imgHeight;

            // Starting size: logo at 160px height, width derived from real aspect
            const logoStartHeight = 160;
            const logoStartWidth = logoStartHeight * logoAspect;

            // Initial state
            plane.scale.set(logoStartWidth, logoStartHeight, 1);
            plane.position.set(0, 0, 0);

            /**
             * Dynamically reads the real navbar logo element's position/size
             * from the DOM. This works because PreloaderGate uses opacity:0
             * (elements are still laid out). Falls back to calculated position
             * if the element isn't found.
             */
            let cachedTarget: { x: number; y: number; width: number; height: number; } | null = null;
            function getTargetFromDOM() {
                if (cachedTarget) return cachedTarget;

                const logoEl = document.getElementById('navbar-logo');
                if (logoEl) {
                    const navEl = logoEl.closest('nav');
                    let oldTransform = '';
                    if (navEl) {
                         // Temporarily remove animation transform to get true destination
                         oldTransform = navEl.style.transform;
                         navEl.style.transform = 'none';
                    }

                    const rect = logoEl.getBoundingClientRect();

                    if (navEl) {
                         navEl.style.transform = oldTransform;
                    }

                    // Convert screen coords to orthographic coords:
                    // Screen: (0,0) = top-left, +right, +down
                    // Ortho:  (0,0) = center,   +right, +up
                    cachedTarget = {
                        x: (rect.left + rect.width / 2) - w / 2,
                        y: h / 2 - (rect.top + rect.height / 2),
                        width: rect.width,
                        height: rect.height,
                    };
                    return cachedTarget;
                }
                // Fallback: default non-scrolled navbar position
                const fallbackH = 56;
                const fallbackW = fallbackH * logoAspect;
                return {
                    x: -w / 2 + 48 + fallbackW / 2,
                    y: h / 2 - 20 - fallbackH / 2,
                    width: fallbackW,
                    height: fallbackH,
                };
            }

            // ── Resize handler ──
            function onResize() {
                w = window.innerWidth;
                h = window.innerHeight;
                renderer.setSize(w, h);
                camera.left = -w / 2;
                camera.right = w / 2;
                camera.top = h / 2;
                camera.bottom = -h / 2;
                camera.updateProjectionMatrix();
            }
            window.addEventListener('resize', onResize, { passive: true });

            // ── Animation — starts only after texture is loaded ──
            let start: number | null = null;
            const HOLD = 400;       // hold center
            const MOVE = 600;       // shrink + fly to navbar
            const FADE = 300;       // background fade
            let animId: number;
            let finished = false;
            let doneDispatched = false;

            function easeOutCubic(x: number) {
                return 1 - Math.pow(1 - x, 3);
            }
            function lerp(a: number, b: number, t: number) {
                return a + (b - a) * t;
            }

            function animate(now: number) {
                if (finished) return;
                
                // Initialize start time on first valid frame to prevent jank
                if (!start) start = now;
                const elapsed = now - start;

                // Read target position (now perfectly cached and stable)
                const target = getTargetFromDOM();

                if (elapsed < HOLD) {
                    plane.scale.set(logoStartWidth, logoStartHeight, 1);
                    plane.position.set(0, 0, 0);
                    material.opacity = 1;
                    renderer.setClearAlpha(1);
                } else if (elapsed < HOLD + MOVE) {
                    const t = easeOutCubic((elapsed - HOLD) / MOVE);
                    plane.scale.set(
                        lerp(logoStartWidth, target.width, t),
                        lerp(logoStartHeight, target.height, t),
                        1
                    );
                    plane.position.set(
                        lerp(0, target.x, t),
                        lerp(0, target.y, t),
                        0
                    );
                    material.opacity = 1;
                    renderer.setClearAlpha(1);
                } else if (elapsed < HOLD + MOVE + FADE) {
                    // Fade background only, keep logo fully visible
                    const t = (elapsed - HOLD - MOVE) / FADE;
                    plane.scale.set(target.width, target.height, 1);
                    plane.position.set(target.x, target.y, 0);
                    renderer.setClearAlpha(1 - t);
                    material.opacity = 1;

                    // Reveal real navbar logo so they overlap perfectly
                    if (!doneDispatched) {
                        doneDispatched = true;
                        window.dispatchEvent(new CustomEvent('preloader:done'));
                    }
                } else {
                    // Canvas removal — real navbar logo is already showing underneath
                    finished = true;
                    renderer.dispose();
                    geometry.dispose();
                    material.dispose();
                    texture.dispose();
                    window.removeEventListener('resize', onResize);
                    setDone(true);
                    return;
                }

                renderer.render(scene, camera);
                animId = requestAnimationFrame(animate);
            }

            animId = requestAnimationFrame(animate);

            // Cleanup if component unmounts during animation
            return () => {
                finished = true;
                cancelAnimationFrame(animId);
                window.removeEventListener('resize', onResize);
            };
        });

        return () => {
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []);

    if (done) return null;

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                inset: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 999,
                pointerEvents: 'none',
            }}
        />
    );
}
