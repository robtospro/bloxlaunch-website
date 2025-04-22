import { useEffect, useState } from 'react';

export default function ParallaxImage({
                                        src,
                                        alt,
                                        className = '',
                                        offsetPos = 0,
                                        style = {},          // ← new
                                      }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        position: 'absolute',               // ← ensure absolute
        willChange: 'transform',
        transform: `translate3d(0, ${offsetY * offsetPos}px, 0)`,
        ...style,                           // ← apply custom top/left
      }}
    />
  );
}
