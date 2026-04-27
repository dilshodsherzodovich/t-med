import { useState, useMemo } from "react";
import { Carousel, Modal, Row, Col } from "react-bootstrap";
import "./ImageGallery.scss";
import SectionHeading from "../../../Components/SectionHeading";
import { useTranslation } from "react-i18next";

const ImageGallery = ({ images = [] }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const imagePairs = useMemo(() => {
    if (!images.length) return [];
    const pairs = [];
    for (let i = 0; i < images.length; i += 3) {
      pairs.push(images.slice(i, i + 3));
    }
    return pairs;
  }, [images]);

  if (!imagePairs.length) return null;

  return (
    <div className="image-gallery-carousel container">
      <SectionHeading
        textColor="cs_white_color"
        SectionSubtitle={t("pages.about.gallery")}
      />
      <div className="cs_height_50 cs_height_lg_30" />
      <Carousel>
        {imagePairs.map((pair, index) => (
          <Carousel.Item key={index}>
            <Row className="g-3">
              {pair.map((image, imageIndex) => (
                <Col key={imageIndex} xs={12} sm={4}>
                  <div className="image-container">
                    <img
                      className="d-block w-100"
                      src={image.src}
                      alt={image.alt}
                      onClick={() => handleImageClick(image)}
                      style={{ cursor: "pointer", borderRadius: "8px", objectFit: "cover", height: "220px" }}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Body className="p-0">
          <img
            src={selectedImage?.largeSrc}
            alt={selectedImage?.alt}
            className="img-fluid w-100"
            style={{ borderRadius: "4px" }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ImageGallery;
