import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function BiographyModal({ active, onClose, director, biographyLabel }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    const onOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) onClose();
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onOutside);
    document.addEventListener("touchstart", onOutside);
    // Lock body scroll while open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onOutside);
      document.removeEventListener("touchstart", onOutside);
      document.body.style.overflow = "";
    };
  }, [active, onClose]);

  return (
    <AnimatePresence>
      {active && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(10, 15, 30, 0.6)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              zIndex: 1000,
            }}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1001,
              padding: "1rem",
            }}
          >
            <div
              ref={panelRef}
              style={{
                width: "100%",
                maxWidth: "680px",
                maxHeight: "88vh",
                borderRadius: "20px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                background: "#f9fafb",
                boxShadow: "0 24px 80px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.08)",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <img
                  src={director?.image}
                  alt={director?.fio}
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                  }}
                />
                {/* Gradient fade into content */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "80px",
                    background: "linear-gradient(to top, #f9fafb, transparent)",
                  }}
                />
                {/* Close button */}
                <button
                  onClick={onClose}
                  aria-label="Close"
                  style={{
                    position: "absolute",
                    top: "14px",
                    right: "14px",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.3)",
                    background: "rgba(0,0,0,0.35)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#fff",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(26,110,247,0.7)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.35)")}
                >
                  <X size={16} />
                </button>
              </div>

              {/* Header */}
              <div style={{ padding: "0 1.75rem 1rem", flexShrink: 0 }}>
                <p style={{
                  color: "#1a6ef7",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  marginBottom: "0.25rem",
                }}>
                  {director?.specialist}
                </p>
                <h3 style={{
                  color: "#111827",
                  fontWeight: 800,
                  fontSize: "1.45rem",
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  {director?.fio}
                </h3>
              </div>

              {/* Divider */}
              <div style={{
                height: "1px",
                background: "rgba(26,110,247,0.1)",
                margin: "0 1.75rem",
                flexShrink: 0,
              }} />

              {/* Biography — scrollable */}
              <div
                style={{
                  overflowY: "auto",
                  padding: "1.25rem 1.75rem 2rem",
                  flex: 1,
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(26,110,247,0.3) transparent",
                }}
                className="bio-modal-scroll"
              >
                <p style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "#1a6ef7",
                  textTransform: "uppercase",
                  letterSpacing: "0.9px",
                  marginBottom: "0.75rem",
                }}>
                  {biographyLabel}
                </p>
                <div
                  className="bio-modal-content"
                  dangerouslySetInnerHTML={{ __html: director?.description }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
