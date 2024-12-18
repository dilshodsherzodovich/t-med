import { useState } from "react";
import { useEffect, useRef } from "react";

const ScrollSection = ({ children, id }) => {
  const sectionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Assuming 1024px as the breakpoint for desktop
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    // if (!isDesktop) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const nextSection = entry.target.nextElementSibling;
          if (nextSection) {
            const scrollToNextSection = () => {
              nextSection.scrollIntoView({ behavior: "smooth" });
              window.removeEventListener("wheel", scrollToNextSection);
            };
            window.addEventListener("wheel", scrollToNextSection, {
              once: true,
            });
          }
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} id={id} style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
};

export default ScrollSection;
