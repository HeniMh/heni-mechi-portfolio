import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}
