import { useRef, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import Slider from "react-slick";
import Button from "../Buttons";

const HeroSection = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    fade: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: false,
    arrows: false,
    afterChange: (index) => setCurrentSlide(index),
  };

  const activeSlide = data?.primarySlider[currentSlide];

  return (
    <section className="cs_hero_wrapper position-relative">
      <div className="cs_hero_bg_slider">
        <Slider {...settings} ref={sliderRef}>
          {data?.primarySlider.map((item, index) => (
            <div key={index}>
              <div
                className="cs_hero_bg_slide cs_bg_filed"
                style={{ backgroundImage: `url(${item.bgImageUrl})` }}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="cs_hero cs_style_1 cs_center cs_hero_content_overlay">
        <div className="container">
          <div className="cs_hero_text">
            <div className="cs_hero_text_in" key={currentSlide}>
              <h1
                className="cs_hero_title"
                dangerouslySetInnerHTML={{ __html: activeSlide?.title }}
              />
              <p
                className="cs_hero_subtitle"
                dangerouslySetInnerHTML={{
                  __html: activeSlide?.contactSubtitle,
                }}
              />
              <div className="cs_hero_info">
                <h3
                  dangerouslySetInnerHTML={{
                    __html: activeSlide?.contactTitle,
                  }}
                />
                <p dangerouslySetInnerHTML={{ __html: activeSlide?.contact }} />
              </div>
              <div className="cs_hero_btns">
                <Button
                  btnText={activeSlide?.btnText1}
                  variant={"cs_btn cs_style_1 cs_color_1"}
                  btnIcons={<FaAnglesRight />}
                  btnUrl={activeSlide?.link}
                />
                <Button
                  btnText={activeSlide?.btnText2}
                  variant={"cs_btn cs_style_1 cs_color_2"}
                  btnIcons={<FaAnglesRight />}
                  btnUrl={activeSlide?.link2}
                />
              </div>
            </div>
            <div className="cs_hero_shape">
              <img
                src={activeSlide?.iconImgUrl}
                alt="Icon"
                className="cs_spinner_img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
