import { useEffect, useState } from 'react';

export default function ParallaxImage({ src, alt, className }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        willChange: 'transform',
        transform: `translate3d(0, ${offsetY * -0.2}px, 0)`,
        transformStyle: 'preserve-3d',
      }}
    />
  );
}
