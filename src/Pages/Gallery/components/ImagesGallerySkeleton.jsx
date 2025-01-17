import Skeleton from "react-loading-skeleton";
import Section from "../../../Components/Section";

export default function ImagesGallerySkeleton({ count = 4 }) {
  const array = [...Array(count)];

  return (
    <Section
      topSpaceLg="0"
      topSpaceMd="0"
      bottomSpaceLg="80"
      bottomSpaceMd="120"
    >
      <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
        {array?.map((_, idx) => (
          <div className="col mb-2" key={idx}>
            <div className="blog rounded overflow-hidden" data-aos="fade-up">
              <Skeleton width="100%" height="400px" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
