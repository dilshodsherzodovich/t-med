import { useEffect, useRef, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import Slider from "react-slick";
import Button from "../Buttons";
const HeroSection = ({ data }) => {
  const [nav1, setNav1] = useState(null);
  let sliderRef1 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    fade: false,
    swipeToSlide: true,
  };

  return (
    <>
      <section
        className="position-relative section"
        style={{ maxHeight: "calc(100vh-150px)" }}
      >
        <div className="cs_hero_slider_thumb slick-slider">
          <Slider {...settings} ref={(slider) => (sliderRef1 = slider)}>
            {data?.primarySlider.map((items, index) => (
              <div className="cs_hero_slider_thumb_item" key={index}>
                <div
                  className="cs_hero cs_style_1 cs_center cs_bg_filed"
                  style={{
                    backgroundImage: `url(${items.bgImageUrl})`,
                  }}
                >
                  <div className="container">
                    <div className="cs_hero_text">
                      <div className="cs_hero_text_in">
                        <h1
                          className="cs_hero_title"
                          dangerouslySetInnerHTML={{ __html: items.title }}
                        />
                        <p
                          className="cs_hero_subtitle"
                          dangerouslySetInnerHTML={{
                            __html: items.contactSubtitle,
                          }}
                        />
                        <div className="cs_hero_info">
                          <h3
                            dangerouslySetInnerHTML={{
                              __html: items.contactTitle,
                            }}
                          />
                          <p
                            dangerouslySetInnerHTML={{ __html: items.contact }}
                          />
                        </div>
                        <div className="cs_hero_btns">
                          <Button
                            btnText={items.btnText1}
                            variant={"cs_btn cs_style_1 cs_color_1"}
                            btnIcons={<FaAnglesRight />}
                            btnUrl={items.link}
                          />
                          <Button
                            btnText={items.btnText2}
                            variant={"cs_btn cs_style_1 cs_color_2"}
                            btnIcons={<FaAnglesRight />}
                            btnUrl={items.link2}
                          />
                        </div>
                      </div>
                      <div className="cs_hero_shape">
                        <img
                          src={items.iconImgUrl}
                          alt="Icon"
                          className="cs_spinner_img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
