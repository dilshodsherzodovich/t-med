import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const CounterSection = ({ data, variant = "dark" }) => {
  const isLight = variant === "light";

  return (
    <div className={isLight ? "cs_counter_light_section" : "cs_counter_glass_section"}>
      <div className="container">
        <div className={isLight ? "cs_counter_light_grid" : "cs_counter_glass_grid"}>
          {data.map((counter, index) => (
            <motion.div
              key={index}
              className={isLight ? "cs_light_stat" : "cs_glass_stat"}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.25 } }}
            >
              {!isLight && <div className="cs_glass_glow" />}

              <div className={isLight ? "cs_light_icon" : "cs_glass_icon"}>
                <img src={counter.iconUrl} alt="Icon" />
              </div>

              <span className={isLight ? "cs_light_num" : "cs_glass_num"}>
                {counter.number}
              </span>
              <span className={isLight ? "cs_light_label" : "cs_glass_label"}>
                {counter.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
