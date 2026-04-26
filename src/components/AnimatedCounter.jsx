import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ target, suffix = '', decimals = 0, delay = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          setTimeout(() => {
            const duration = 1800;
            const start = performance.now();
            
            const tick = (now) => {
              const t = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - t, 3);
              const currentCount = target * eased;
              
              setCount(currentCount);
              
              if (t < 1) {
                requestAnimationFrame(tick);
              } else {
                setCount(target);
              }
            };
            requestAnimationFrame(tick);
          }, delay * 1000);
          
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target, delay]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}
