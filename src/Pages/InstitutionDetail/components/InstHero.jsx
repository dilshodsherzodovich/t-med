import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./InstHero.scss";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

export default function InstHero({ orgData }) {
  const bgImage = orgData?.images?.[0];

  return (
    <div className="inst-hero">
      {/* ── Background ─────────────────────────────────────── */}
      <motion.div
        className="inst-hero-bg"
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />

      {/* Overlays */}
      <div className="inst-hero-overlay" />
      <div className="inst-hero-grid" />

      {/* ── Floating orbs ──────────────────────────────────── */}
      <motion.div
        className="inst-hero-orb inst-hero-orb--1"
        animate={{ y: [0, -50, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="inst-hero-orb inst-hero-orb--2"
        animate={{ y: [0, 40, 0], x: [0, -25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="inst-hero-orb inst-hero-orb--3"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* ── Content ────────────────────────────────────────── */}
      <motion.div
        className="inst-hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div className="inst-hero-badge" variants={itemVariants}>
          <span className="inst-hero-badge-dot" />
          <span>Muassasa</span>
        </motion.div>

        {/* Title */}
        <motion.h1 className="inst-hero-title" variants={itemVariants}>
          {orgData?.name}
        </motion.h1>

        {/* Accent line */}
        <motion.div
          className="inst-hero-line"
          variants={itemVariants}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        />

        {/* Subtitle */}
        {orgData?.address && (
          <motion.p className="inst-hero-subtitle" variants={itemVariants}>
            {orgData.address}
          </motion.p>
        )}

        {/* Buttons */}
        <motion.div className="inst-hero-btns" variants={itemVariants}>
          <button
            className="inst-hero-btn inst-hero-btn--glow"
            onClick={() => scrollTo("about")}
          >
            Batafsil o'qish
          </button>
          <button
            className="inst-hero-btn inst-hero-btn--glass"
            onClick={() => scrollTo("contact")}
          >
            Aloqa
          </button>
        </motion.div>
      </motion.div>

      {/* ── Scroll cue ─────────────────────────────────────── */}
      <button className="inst-hero-scroll" onClick={() => scrollTo("about")} aria-label="Pastga">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </button>
    </div>
  );
}
