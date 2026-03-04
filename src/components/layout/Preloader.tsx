'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Preloader() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [done, setDone] = useState(false);

    useEffect(() => {
        // Skip entirely if already done in this session
        if (typeof window !== 'undefined' && sessionStorage.getItem('io_preloader_done') === 'true') {
            setDone(true);
            return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;

        // Force scroll lock while loading
        document.body.style.overflow = 'hidden';

        let fallen = false;
        const fallbackDone = () => {
            if (fallen) return;
            fallen = true;
            document.body.style.overflow = '';
            sessionStorage.setItem('io_preloader_done', 'true');
            window.dispatchEvent(new CustomEvent('preloader:done'));
            setDone(true);
        };

        // Safety fallback: If anything hangs (e.g., texture load fails, slow network), 
        // kill the preloader after exactly 3.5 seconds so the user isn't stuck on a black screen.
        const safetyTimeout = setTimeout(fallbackDone, 3500);

        // ── Setup renderer ──
        let renderer: THREE.WebGLRenderer;
        try {
            renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setClearColor(0x000000, 1);
        } catch (e) {
            // WebGL not supported or failed
            fallbackDone();
            return;
        }

        let w = window.innerWidth;
        let h = window.innerHeight;
        renderer.setSize(w, h);

        const camera = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2, -100, 100);
        camera.position.z = 10;
        const scene = new THREE.Scene();

        const loader = new THREE.TextureLoader();
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 1 });
        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);

        renderer.render(scene, camera);

        loader.load(
            '/assets/logo/logo-io.webp',
            (texture) => {
                texture.minFilter = THREE.LinearFilter;
                texture.magFilter = THREE.LinearFilter;
                material.map = texture;
                material.needsUpdate = true;

                const imgWidth = texture.image.naturalWidth || texture.image.width || 1200;
                const imgHeight = texture.image.naturalHeight || texture.image.height || 400;
                const logoAspect = imgWidth / imgHeight;

                const logoStartHeight = window.innerWidth < 768 ? 100 : 160; // Smaller on mobile
                const logoStartWidth = logoStartHeight * logoAspect;

                plane.scale.set(logoStartWidth, logoStartHeight, 1);
                plane.position.set(0, 0, 0);

                let cachedTarget: { x: number; y: number; width: number; height: number; } | null = null;
                function getTargetFromDOM() {
                    if (cachedTarget) return cachedTarget;
                    const logoEl = document.getElementById('navbar-logo');
                    if (logoEl) {
                        const navEl = logoEl.closest('nav');
                        let oldTransform = '';
                        if (navEl) {
                            oldTransform = navEl.style.transform;
                            navEl.style.transform = 'none';
                        }
                        const rect = logoEl.getBoundingClientRect();
                        if (navEl) {
                            navEl.style.transform = oldTransform;
                        }

                        // Adjust fallback sizing if native size is 0
                        const actualWidth = rect.width || (logoStartHeight * 0.4 * logoAspect);
                        const actualHeight = rect.height || (logoStartHeight * 0.4);

                        cachedTarget = {
                            x: (rect.left + actualWidth / 2) - w / 2,
                            y: h / 2 - (rect.top + actualHeight / 2),
                            width: actualWidth,
                            height: actualHeight,
                        };
                        return cachedTarget;
                    }

                    const fallbackH = window.innerWidth < 768 ? 40 : 56;
                    const fallbackW = fallbackH * logoAspect;
                    return {
                        x: -w / 2 + (window.innerWidth < 768 ? 24 : 48) + fallbackW / 2,
                        y: h / 2 - 20 - fallbackH / 2,
                        width: fallbackW,
                        height: fallbackH,
                    };
                }

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

                let start: number | null = null;
                const HOLD = 300;
                const MOVE = 600;
                const FADE = 300;
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
                    if (!start) start = now;
                    const elapsed = now - start;

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
                        const t = (elapsed - HOLD - MOVE) / FADE;
                        plane.scale.set(target.width, target.height, 1);
                        plane.position.set(target.x, target.y, 0);
                        renderer.setClearAlpha(1 - t);
                        material.opacity = 1;

                        if (!doneDispatched) {
                            doneDispatched = true;
                            document.body.style.overflow = '';
                            sessionStorage.setItem('io_preloader_done', 'true');
                            window.dispatchEvent(new CustomEvent('preloader:done'));
                        }
                    } else {
                        finished = true;
                        clearTimeout(safetyTimeout);
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

                return () => {
                    finished = true;
                    clearTimeout(safetyTimeout);
                    cancelAnimationFrame(animId);
                    window.removeEventListener('resize', onResize);
                };
            },
            undefined, // onProgress
            (error) => {
                // Return gracefully if texture fails to load (offline, adblock, etc)
                console.error("Preloader texture load error", error);
                fallbackDone();
            }
        );

        return () => {
            clearTimeout(safetyTimeout);
            document.body.style.overflow = '';
            if (renderer) renderer.dispose();
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
                zIndex: 9999, // Ensure it's absolutely on top
                pointerEvents: 'none',
                backgroundColor: 'black' // Guarantee black backdrop even before webgl init
            }}
        />
    );
}
