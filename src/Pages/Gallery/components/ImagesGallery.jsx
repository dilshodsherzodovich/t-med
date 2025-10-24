import { useMemo, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import ImagesGallerySkeleton from "./ImagesGallerySkeleton";
import { useQuery } from "@tanstack/react-query";
import { useHttp } from "../../../hooks/useHttp";

export default function ImagesGallery() {
  const [index, setIndex] = useState(-1);

  const sendRequest = useHttp();

  const { data: gallery, isLoading } = useQuery({
    queryKey: ["gallery"],
    queryFn: () => sendRequest({ url: `/blog/gallery/` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  const images = useMemo(() => {
    if (!gallery?.results?.length) return [];
    return gallery?.results?.map((item) => ({
      src: item?.images[0]?.image,
      original: item?.images[0]?.image,
      width: 400,
      height: 300,
      tags: [],
      caption: "rasm",
    }));
  }, [gallery]);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  return (
    <>
      <div className="container">
        {isLoading ? (
          <div data-aos="fade-up">
            <ImagesGallerySkeleton count={4} />
          </div>
        ) : (
          <div data-aos="fade-up">
            <Gallery
              images={images}
              onClick={handleClick}
              enableImageSelection={false}
              rowHeight={300}
              margin={5}
            />
            {!!currentImage && (
              /* @ts-ignore */
              <Lightbox
                mainSrc={currentImage.original}
                imageTitle={currentImage.caption}
                mainSrcThumbnail={currentImage.src}
                nextSrc={nextImage.original}
                nextSrcThumbnail={nextImage.src}
                prevSrc={prevImage.original}
                prevSrcThumbnail={prevImage.src}
                onCloseRequest={handleClose}
                onMovePrevRequest={handleMovePrev}
                onMoveNextRequest={handleMoveNext}
                enableZoom
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
