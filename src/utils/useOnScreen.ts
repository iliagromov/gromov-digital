import { RefObject, useState, useMemo, useEffect } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);
  let observer = null;

  if (typeof window !== "undefined") {
    observer = useMemo(
      () =>
        new IntersectionObserver(
          ([entry]) => {
            setIntersecting(entry.isIntersecting);
            // if (entry.boundingClientRect.top > 0) {
            //   setIntersecting(false);
            // } else {
            //   console.log("ABOVE");
            //   setIntersecting(true);
            // }
          },
          {
            rootMargin: "0px",
            threshold: 0,
          }
        ),
      [ref]
    );
  }

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}
