import { useEffect, useState } from "react";

const useScrollPosition = () => {
  // Y position 0
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      // this we added: this allows us to create smoother animations.
      requestAnimationFrame(() => {
        setScrollPosition(window.pageYOffset);
      });
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
