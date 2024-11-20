import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function BlogLoadingSkeleton({ count = 5 }) {
  const skeletonItems = [...Array(count)];

  return (
    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
      {skeletonItems?.map((_, index) => (
        <div className="col mb-2" key={index}>
          <div className="blog rounded overflow-hidden" data-aos="fade-up">
            <Skeleton width="100%" height="220px" />
            <div className="info d-flex flex-column justify-content-between">
              <div>
                <ul className="meta gap-1">
                  <i className="far fa-calendar"></i>
                  <Skeleton width="100px" />
                </ul>
                <h3 className="title">
                  <Skeleton count={2} />
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
