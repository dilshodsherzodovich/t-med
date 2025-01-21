import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import "./InfiniteLogoSlider.scss";

const partners = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/partner1.jpg-7vdUGbCIAX7WtAgS9IsBkbuX3a7QgL.jpeg",
    alt: "Samarkand State Medical University Logo",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/partner2-KI0Loio7M9wM7eqjZne4EsiIGaQsPi.png",
    alt: "Medical Academy Logo",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/partner3.png-ycDigJ3WexIds0ByhTkAlAF93iFRuS.jpeg",
    alt: "Healthcare Organization Logo",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/partner4.jpg-QRqg7sKCDeVMw0XONoDnCoGtKFF78I.jpeg",
    alt: "UZAMBS Logo",
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/partner5.jpg-sBkh5ZwzQVunqWn5chyrqtkQ2xmKVB.jpeg",
    alt: "AGMK Logo",
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/partner6.jpg-06UZdJBOpx6MzpqjUqbOVHLYUhTPxX.jpeg",
    alt: "MIOT Pacific Medical Logo",
  },
];

const doubledPartners = [...partners, ...partners];

const InfiniteLogoSlider = () => {
  const controls = useAnimationControls();
  const containerRef = useRef(null);

  useEffect(() => {
    const animate = async () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.scrollWidth / 2;

      await controls.start({
        x: -containerWidth,
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
      });
    };

    animate();
  }, [controls]);

  return (
    <div className="partner-slider">
      <motion.div
        ref={containerRef}
        className="partner-slider__container"
        animate={controls}
      >
        {doubledPartners.map((partner, index) => (
          <div key={`${partner.id}-${index}`} className="partner-slider__item">
            <img
              src={partner.src || "/placeholder.svg"}
              alt={partner.alt}
              className="partner-slider__image"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteLogoSlider;
