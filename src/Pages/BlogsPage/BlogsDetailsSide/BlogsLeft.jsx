import { FaCalendarAlt, FaUser } from "react-icons/fa";

const BlogsLeft = ({ data }) => {
  return (
    <>
      <div className="col-lg-8" data-aos="fade-up">
        <div className="cs_post_details cs_style_1">
          <div className="cs_post_thumb_thumbnail">
            <img src={data.imageSrc} alt={data.imageAlt} />
          </div>
          <ul className="cs_post_meta cs_mp0">
            <li>
              <i>
                <FaUser />
              </i>
              {data.text}
            </li>
            <li>
              <i>
                <FaCalendarAlt />
              </i>
              {data.secText}
            </li>
          </ul>
          {data.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogsLeft;
