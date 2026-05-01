import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [variant, setVariant] = useState("default");
  const [label, setLabel] = useState("");

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const ringX = useSpring(mx, { damping: 22, stiffness: 220, mass: 0.6 });
  const ringY = useSpring(my, { damping: 22, stiffness: 220, mass: 0.6 });
  const dotX = useSpring(mx, { damping: 45, stiffness: 700 });
  const dotY = useSpring(my, { damping: 45, stiffness: 700 });

  useEffect(() => {
    const onMove = (e) => { mx.set(e.clientX); my.set(e.clientY); };
    const onDown = () => setVariant("click");
    const onUp = () => setVariant("default");

    const onOver = (e) => {
      const el = e.target.closest("a, button, [data-cursor]");
      if (el) {
        setVariant("hover");
        setLabel(el.dataset.cursor || "");
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
    };
  }, [mx, my]);

  const ringVariants = {
    default: {
      width: 40, height: 40,
      background: "transparent",
      border: "1.5px solid rgba(255,255,255,0.7)",
    },
    hover: {
      width: 68, height: 68,
      background: "rgba(255,255,255,0.08)",
      border: "1.5px solid rgba(255,255,255,0.9)",
    },
    click: {
      width: 28, height: 28,
      background: "rgba(255,255,255,0.2)",
      border: "1.5px solid white",
    },
  };

  return (
    <>
      <motion.div
        className="cs_cursor_ring"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        variants={ringVariants}
        animate={variant}
        transition={{ type: "spring", damping: 20, stiffness: 280 }}
      >
        {label && <span className="cs_cursor_label">{label}</span>}
      </motion.div>
      <motion.div
        className="cs_cursor_dot"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: variant === "click" ? 0.4 : variant === "hover" ? 0 : 1 }}
        transition={{ type: "spring", damping: 30, stiffness: 500 }}
      />
    </>
  );
};

export default CustomCursor;
