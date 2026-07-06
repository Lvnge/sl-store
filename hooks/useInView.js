import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    // small delay
    const timer = setTimeout(() => {
      if (ref.current) observer.observe(ref.current);
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, inView];
}
