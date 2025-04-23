import React, { useEffect, useState, CSSProperties } from 'react';

export interface ParallaxImageProps {
  /** Image source URL */
  src: string;
  /** Alt text for the image */
  alt: string;
  /** Additional CSS classes */
  className?: string;
  /** Scroll offset multiplier */
  offsetPos?: number;
  /** Inline styles (e.g., top/left positioning) */
  style?: CSSProperties;
}

export default function ParallaxImage({
                                        src,
                                        alt,
                                        className = '',
                                        offsetPos = 0,
                                        style = {},
                                      }: ParallaxImageProps) {
  const [offsetY, setOffsetY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        position: 'absolute',      // ensure it's absolutely positioned
        willChange: 'transform',   // hint for performance
        transform: `translate3d(0, ${offsetY * offsetPos}px, 0)`,
        ...style,                  // apply custom top/left or other styles
      }}
    />
  );
}