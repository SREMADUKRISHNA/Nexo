import { useState, useEffect } from 'react';

interface ImageWithFallbackProps {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
}

export function ImageWithFallback({ src, fallback, alt, className }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const onError = () => {
    if (!hasError) {
      setImgSrc(fallback);
      setHasError(true);
    }
  };

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className}
      onError={onError}
    />
  );
}
