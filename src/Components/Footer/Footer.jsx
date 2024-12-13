import { FaPhoneAlt, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaRegClock,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const data = {
    backgroundImage: "/assets/img/footer_bg.jpg",
    logo: "/assets/img/logo.PNG",
    contactText: "Rahbraiyat qabul kunlari: <br /> Du - Juma: 8.00 - 18.00",
    contactText2:
      "Toshkent sh., Yashnabod tumani, Taraqqiyot kuchasi 2-proyezd, 12A uy",
    contactText3: "+998 (71) 299 98 27",
    facebookHref: "https://facebook.com/nsurailways",
    telegramHref: "https://t.me/nsurailways",
    twitterHref: "https://x.com/nsurailway",
    instagramHref: "https://instagram.com/nsurailway",
    youtubeHref: "https://youtube.com/nsurailway",
    widgets: [
      {
        title: "Xizmatlar",
        links: [
          { href: "/service", text: "Farmakologiya" },
          { href: "/service", text: "Ortopedik" },
          { href: "/service", text: "Gematologiya" },
          { href: "/service", text: "Nevrologiya" },
          { href: "/service", text: "Urologiya" },
        ],
      },
      {
        title: "Tezkor havolalar",
        links: [
          { href: "/", text: "Asosiy" },
          { href: "/about", text: "Biz haqimizda" },
          { href: "/service", text: "Xizmatlar" },
          { href: "/contact", text: "Aloqa" },
          { href: "/doctor", text: "Shifokorlar" },
        ],
      },
    ],
    recentPosts: [
      {
        href: "/blog/blog-details",
        image: "/assets/img/recent_post_1.png",
        date: "23 jun 2024",
        title: "We round Solution york Blog",
      },
      {
        href: "/blog/blog-details",
        image: "/assets/img/recent_post_2.png",
        date: "20 jun 2024",
        title: "The Medical Of This Working Health",
      },
    ],
    copyrightText: `Copyright © ${new Date().getFullYear()} "O'zbekiston Temir yo'llari" AJ, Barcha huqular himoyalangan.`,
  };

  return (
    <footer
      className="cs_footer cs_blue_bg cs_bg_filed cs_white_color"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="container">
        <div className="cs_footer_row">
          <div className="cs_footer_col">
            <div className="cs_footer_highlight_col cs_accent_bg">
              <div className="cs_footer_logo d-flex align-items-center justify-content-center">
                <img style={{ height: "100px" }} src={data.logo} alt="Logo" />
              </div>
              <ul className="cs_footer_contact cs_mp_0">
                <li>
                  <i
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <FaRegClock />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <FaLocationDot />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText2 }}
                  />
                </li>
                <li>
                  <i
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <FaPhoneAlt />
                  </i>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.contactText3 }}
                  />
                </li>
              </ul>
            </div>
          </div>

          {data.widgets.map((widget, index) => (
            <div className="cs_footer_col" key={index}>
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title">{widget.title}</h2>
                <ul className="cs_footer_widget_nav_list cs_mp_0">
                  {widget.links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="cs_footer_col">
            <div className="cs_footer_widget">
              <h2 className="cs_footer_widget_title">Ijtimoiy tarmoqlar</h2>
              <div className="cs_social_btns cs_style_1">
                <Link to={data.facebookHref} className="cs_center">
                  <i>
                    <FaFacebookF />
                  </i>
                </Link>
                <Link to={data.telegramHref} className="cs_center">
                  <i>
                    <FaTelegramPlane />
                  </i>
                </Link>
                <Link to={data.twitterHref} className="cs_center">
                  <i>
                    <FaXTwitter />
                  </i>
                </Link>
                <Link to={data.instagramHref} className="cs_center">
                  <i>
                    <FaInstagram />
                  </i>
                </Link>
                <Link to={data.youtubeHref} className="cs_center">
                  <i>
                    <FaYoutube />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cs_footer_bottom cs_primary_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <p className="cs_footer_copyright mb-0">{data.copyrightText}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
