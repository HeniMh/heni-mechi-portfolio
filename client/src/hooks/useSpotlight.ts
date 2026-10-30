import { useEffect } from 'react';

/** Feeds pointer coordinates to every [data-spot] element as --mx / --my (local px). */
export function useSpotlight() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    let frame = 0;
    let x = 0;
    let y = 0;

    const update = () => {
      frame = 0;
      document.querySelectorAll<HTMLElement>('[data-spot]').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        el.style.setProperty('--mx', `${x - rect.left}px`);
        el.style.setProperty('--my', `${y - rect.top}px`);
      });
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);
}
