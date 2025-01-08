import { useMemo, useState } from "react";
import { Carousel, Modal, Row, Col } from "react-bootstrap";
import "./ImageGallery.scss";
import SectionHeading from "../../../Components/SectionHeading";

// const images = [
//   {
//     src: "https://picsum.photos/id/1018/500/300",
//     largeSrc: "https://picsum.photos/id/1018/1000/600",
//     alt: "Nature landscape",
//     title: "Beautiful Landscape",
//     description: "A serene view of mountains and a lake",
//   },
//   {
//     src: "https://picsum.photos/id/1015/500/300",
//     largeSrc: "https://picsum.photos/id/1015/1000/600",
//     alt: "Forest scene",
//     title: "Misty Forest",
//     description: "A foggy day in a dense forest",
//   },
//   {
//     src: "https://picsum.photos/id/1019/500/300",
//     largeSrc: "https://picsum.photos/id/1019/1000/600",
//     alt: "Ocean view",
//     title: "Coastal Sunrise",
//     description: "The sun rising over a rocky coastline",
//   },
//   {
//     src: "https://picsum.photos/id/1039/500/300",
//     largeSrc: "https://picsum.photos/id/1039/1000/600",
//     alt: "Desert landscape",
//     title: "Desert Dunes",
//     description: "Rolling sand dunes in a vast desert",
//   },
//   {
//     src: "https://picsum.photos/id/1043/500/300",
//     largeSrc: "https://picsum.photos/id/1043/1000/600",
//     alt: "City skyline",
//     title: "Urban Nightscape",
//     description: "A city skyline illuminated at night",
//   },
//   {
//     src: "https://picsum.photos/id/1044/500/300",
//     largeSrc: "https://picsum.photos/id/1044/1000/600",
//     alt: "Snowy mountains",
//     title: "Winter Wonderland",
//     description: "Snow-capped mountains under a clear sky",
//   },
// ];

const ImageGallery = ({ gallery }) => {
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

  const images = useMemo(() => {
    if (!gallery?.results?.length) return [];
    return gallery?.results[0].images?.map((item) => ({
      src: item?.image,
      largeSrc: item?.image,
      alt: "",
    }));
  }, [gallery]);

  // Group images into pairs
  const imagePairs = useMemo(() => {
    if (!images?.length) return [];
    const pairImages = [];
    for (let i = 0; i < images?.length; i += 3) {
      pairImages.push(images?.slice(i, i + 3));
    }
    return pairImages;
  }, [images]);

  console.log(imagePairs);

  return (
    <div className="image-gallery-carousel">
      <SectionHeading
        textColor={"cs_white_color"}
        SectionSubtitle="Galereya"
        // SectionTitle={data.title}
        // SectionDescription={data.description}
      />
      <Carousel>
        {imagePairs.map((pair, index) => (
          <Carousel.Item key={index}>
            <Row>
              {pair.map((image, imageIndex) => (
                <Col key={imageIndex} xs={4}>
                  <div className="image-container">
                    <img
                      className="d-block w-100"
                      src={image.src}
                      alt={image.alt}
                      onClick={() => handleImageClick(image)}
                    />
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Body>
          <img
            src={selectedImage?.largeSrc}
            alt={selectedImage?.alt}
            className="img-fluid"
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ImageGallery;
