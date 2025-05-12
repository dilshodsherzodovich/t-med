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
          <div className="cs_post_details_content row">
            {data?.images?.map((img) => (
              <div key={img?.image} className="col-md-4 col-sm-12 p-1">
                <img
                  className=" w-100 h-100 object-fit-cover "
                  style={{
                    maxHeight: "200px",
                  }}
                  src={img?.image}
                  alt={img?.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsLeft;
