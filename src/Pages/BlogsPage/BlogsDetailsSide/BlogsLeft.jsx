import { FaCalendarAlt, FaEye, FaUser } from "react-icons/fa";

const BlogsLeft = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="col-lg-8" data-aos="fade-up">
        <div className="cs_post_details cs_style_1">
          <div className="cs_post_thumb_thumbnail">
            <img src={data.imageSrc} alt={data.imageAlt} />
          </div>
          <ul className="cs_post_meta cs_mp0" style={{ color: "#2ea6f7" }}>
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
            <li>
              <i>
                <FaEye />
              </i>
              {data.views}
            </li>
          </ul>

          <p dangerouslySetInnerHTML={{ __html: data?.content[0] }}></p>
        </div>
      </div>
    </>
  );
};

export default BlogsLeft;
