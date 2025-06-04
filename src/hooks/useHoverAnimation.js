import { useState, useCallback } from 'react';

const useHoverAnimation = (initialScale = 1) => {
  const [scale, setScale] = useState(initialScale);

  const handleMouseEnter = useCallback(() => {
    setScale(1.05);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setScale(1);
  }, []);

  return {
    scale,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useHoverAnimation; 