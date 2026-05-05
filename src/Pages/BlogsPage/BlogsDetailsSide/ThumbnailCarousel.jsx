import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ThumbnailCarousel.scss";

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 36;
const GAP_PX = 2;
const MARGIN_PX = 2;

function Thumbnails({ images, index, setIndex }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    let pos = 0;
    for (let i = 0; i < index; i++) pos += COLLAPSED_WIDTH_PX + GAP_PX;
    pos += MARGIN_PX;
    const center = scrollRef.current.offsetWidth / 2 - FULL_WIDTH_PX / 2;
    scrollRef.current.scrollTo({ left: pos - center, behavior: "smooth" });
  }, [index]);

  return (
    <div ref={scrollRef} className="tc-thumbs-scroll">
      <div className="tc-thumbs-row">
        {images.map((src, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? "active" : "inactive"}
            variants={{
              active:   { width: FULL_WIDTH_PX,   marginLeft: MARGIN_PX, marginRight: MARGIN_PX },
              inactive: { width: COLLAPSED_WIDTH_PX, marginLeft: 0,        marginRight: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="tc-thumb-btn"
          >
            <img src={src} alt={`Rasm ${i + 1}`} className="tc-thumb-img" draggable={false} />
            {i === index && (
              <motion.div
                className="tc-thumb-active-bar"
                layoutId="tc-active-bar"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default function ThumbnailCarousel({ images = [] }) {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  // Sync x position with index
  useEffect(() => {
    if (isDragging || !containerRef.current) return;
    const w = containerRef.current.offsetWidth || 1;
    animate(x, -index * w, { type: "spring", stiffness: 300, damping: 30 });
  }, [index, x, isDragging]);

  // Auto-advance every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      if (!isDraggingRef.current) {
        setIndex((i) => (i + 1) % images.length);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const onDragStart = () => {
    setIsDragging(true);
    isDraggingRef.current = true;
  };

  const onDragEnd = (_, info) => {
    setIsDragging(false);
    isDraggingRef.current = false;
    const w = containerRef.current?.offsetWidth || 1;
    let next = index;
    if (Math.abs(info.velocity.x) > 500) {
      next = info.velocity.x > 0 ? index - 1 : index + 1;
    } else if (Math.abs(info.offset.x) > w * 0.3) {
      next = info.offset.x > 0 ? index - 1 : index + 1;
    }
    setIndex(Math.max(0, Math.min(images.length - 1, next)));
  };

  if (!images.length) return null;

  return (
    <div className="tc-wrap">
      {/* Main viewer */}
      <div className="tc-main" ref={containerRef}>
        <motion.div
          className="tc-track"
          drag="x"
          dragElastic={0.15}
          dragMomentum={false}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          style={{ x }}
        >
          {images.map((src, i) => (
            <div key={i} className="tc-slide">
              <img src={src} alt={`Rasm ${i + 1}`} className="tc-slide-img" draggable={false} />
            </div>
          ))}
        </motion.div>

        <button
          className={`tc-nav tc-nav--prev${index === 0 ? " tc-nav--disabled" : ""}`}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
        >
          <ChevronLeft size={22} />
        </button>

        <button
          className={`tc-nav tc-nav--next${index === images.length - 1 ? " tc-nav--disabled" : ""}`}
          onClick={() => setIndex((i) => Math.min(images.length - 1, i + 1))}
          disabled={index === images.length - 1}
        >
          <ChevronRight size={22} />
        </button>

        {/* Progress dots */}
        <div className="tc-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`tc-dot${i === index ? " tc-dot--active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <div className="tc-counter">
          {index + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <Thumbnails images={images} index={index} setIndex={setIndex} />
      )}
    </div>
  );
}
