import { useState, useEffect } from "react";

export default (element, rootMargin = "0px") => {
  const [isIntersection, setIsIntersection] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersection(entry.isIntersecting),
      {
        rootMargin,
      }
    );

    element.current && observer.observe(element.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersection;
};
