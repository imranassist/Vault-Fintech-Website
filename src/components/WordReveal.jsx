import { useEffect, useRef, useState } from 'react';

export default function WordReveal({ children, className = '', delay = 0, as: Component = 'span', style = {} }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInView(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Component
      ref={ref}
      className={`word-reveal ${isInView ? 'in' : ''} ${className}`}
      style={{ ...style }}
    >
      {children}
    </Component>
  );
}
