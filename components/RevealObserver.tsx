'use client';
import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.r');

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'none';
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        // Already visible on load — don't hide it, just observe for the transition
        el.style.opacity = '1';
        el.style.transform = 'none';
      } else {
        // Below the fold — hide with inline styles and reveal on scroll
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px)';
        obs.observe(el);
      }
    });

    return () => obs.disconnect();
  }, []);

  return null;
}
