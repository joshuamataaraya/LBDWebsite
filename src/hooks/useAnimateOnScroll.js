import { useEffect } from 'react';

/**
 * Sets up an IntersectionObserver on all `.animate-on-scroll` elements
 * inside the given container ref and adds the `is-visible` class when
 * they enter the viewport.
 */
export function useAnimateOnScroll(containerRef) {
  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = container.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef]);
}
