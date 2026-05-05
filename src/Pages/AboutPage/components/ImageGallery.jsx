import { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import "./ImageGallery.scss";
import SectionHeading from "../../../Components/SectionHeading";
import { useTranslation } from "react-i18next";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const ImageGallery = ({ images = [] }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (!images.length) return null;

  return (
    <div className="container">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <SectionHeading
          textColor="cs_heading_color"
          SectionSubtitle={t("pages.about.gallery")}
          variant="text-center"
        />
      </motion.div>
      <div className="cs_height_50 cs_height_lg_30" />
      
      <div className="cs_mosaic_gallery">
        {images.map((image, imageIndex) => (
          <motion.div
            key={imageIndex}
            className="cs_gallery_item"
            custom={imageIndex}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            onClick={() => handleImageClick(imageIndex)}
          >
            <img src={image.src} alt={image.alt || "Gallery Image"} />
          </motion.div>
        ))}
      </div>

      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        centered 
        size="lg"
        contentClassName="bg-transparent border-0"
      >
        <Modal.Body className="p-0 position-relative">
          <button 
            onClick={handleCloseModal}
            className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3"
            style={{ filter: "drop-shadow(0px 0px 5px rgba(0,0,0,0.8))" }}
          ></button>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Carousel 
              activeIndex={selectedIndex} 
              onSelect={(idx) => setSelectedIndex(idx)}
              indicators={false}
              interval={null}
              className="cs_preview_carousel"
            >
              {images.map((img, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    src={img.largeSrc}
                    alt={img.alt || "Gallery Image Large"}
                    className="img-fluid w-100"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </motion.div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ImageGallery;
