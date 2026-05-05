import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "./ExpandableGallery.scss";

export default function ExpandableGallery({ images = [] }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!images.length) return null;

  const getFlexValue = (i) => {
    if (hoveredIndex === null) return 1;
    return hoveredIndex === i ? 2.5 : 0.5;
  };

  const goNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="eg-wrap">
      {/* ── Horizontal strip ────────────────────────────────── */}
      <div className="eg-strip">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="eg-item"
            style={{ flex: 1 }}
            animate={{ flex: getFlexValue(i) }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedIndex(i)}
          >
            <img src={src} alt={`Rasm ${i + 1}`} className="eg-img" />
            <motion.div
              className="eg-dim"
              animate={{ opacity: hoveredIndex === i ? 0 : 0.28 }}
              transition={{ duration: 0.3 }}
            />
            {hoveredIndex === i && (
              <motion.div
                className="eg-expand-hint"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* ── Lightbox modal ──────────────────────────────────── */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="eg-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <button className="eg-modal-close" onClick={() => setSelectedIndex(null)}>
              <X size={24} />
            </button>

            {images.length > 1 && (
              <button className="eg-modal-nav eg-modal-nav--prev" onClick={goPrev}>
                <ChevronLeft size={32} />
              </button>
            )}

            <motion.div
              className="eg-modal-img-wrap"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex]}
                alt={`Rasm ${selectedIndex + 1}`}
                className="eg-modal-img"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {images.length > 1 && (
              <button className="eg-modal-nav eg-modal-nav--next" onClick={goNext}>
                <ChevronRight size={32} />
              </button>
            )}

            <div className="eg-modal-counter">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
