import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { FaAnglesRight, FaLocationDot, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";

const Header = ({ isTopBar, variant }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState();
  const sendRequest = useHttp();

  const { data: allDocs } = useQuery({
    queryKey: ["docs"],
    queryFn: () => sendRequest({ url: `/reception/decisions//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const { data: institutionCategories } = useQuery({
    queryKey: ["institutionCategories"],
    queryFn: () => sendRequest({ url: `/reception/category-organization//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const { data: departments } = useQuery({
    queryKey: ["departments"],
    queryFn: () => sendRequest({ url: `/reception/department//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const menu = {
    email: "nsu-railway@gmail.com",
    location:
      "Toshkent sh., Yashnabod tumani, Taraqqiyot kuchasi 2-proyezd, 12A uy",
    logoUrl: "/assets/img/logo.PNG",
    logoLink: "/",
    navItems: [
      {
        label: "Biz haqimizda",
        href: "/about",
        subItems: [
          { label: "Muassasa haqida", href: "/about" },
          { label: "Rahbariyat", href: "/management" },
          { label: "Administratsiya", href: "/administration" },
        ],
      },
      {
        label: "Bo'limlar",
        href: "",
        subItems: departments?.results?.length
          ? departments?.results?.map((item) => ({
              label: item?.name,
              href: `/departments/${item?.id}`,
            }))
          : [],
      },
      {
        label: "Xizmatlar",
        href: "/service",
      },
      {
        label: "Muassasalar",
        href: "/institutions?category=bolnitsa",
        subItems: institutionCategories?.results?.length
          ? institutionCategories?.results?.map((item) => ({
              label: item?.name,
              href: `/institutions?category=${item?.id}`,
            }))
          : [],
      },
      {
        label: "Yangiliklar",
        href: "/blog",
      },
      {
        label: "Qonunchilik bazasi",
        href: "/docs",
        subItems: allDocs?.results?.length
          ? allDocs?.results?.map((item) => ({
              label: item?.name,
              href: `/docs?type=${item?.id}`,
            }))
          : [],
      },
    ],
    btnUrl: "/contact",
    btnText: "Aloqa",
  };

  const handleOpenMobileSubmenu = (index) => {
    if (openMobileSubmenuIndex.includes(index)) {
      setOpenMobileSubmenuIndex((prev) => prev.filter((f) => f !== index));
    } else {
      setOpenMobileSubmenuIndex((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky("cs_gescout_sticky"); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky("cs_gescout_sticky cs_gescout_show"); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);
  return (
    <>
      <header
        className={`cs_site_header cs_style_1 ${
          variant ? variant : ""
        } cs_primary_color cs_sticky_header ${isSticky ? isSticky : ""}`}
      >
        {isTopBar && (
          <div className="cs_top_header cs_blue_bg cs_white_color">
            <div className="container">
              <div className="cs_top_header_in">
                <div className="cs_top_header_left">
                  <ul className="cs_header_contact_list cs_mp_0">
                    <li>
                      <i>
                        <FaEnvelope />
                      </i>
                      <Link to={`mailto:${menu.email}`}>{menu.email}</Link>
                    </li>
                    <li>
                      <i>
                        <FaLocationDot />
                      </i>
                      {menu.location}
                    </li>
                  </ul>
                </div>
                <div className="cs_top_header_right">
                  <div className="cs_social_btns cs_style_1">
                    <Link
                      to="https://www.facebook.com/nsurailways"
                      className="cs_center"
                    >
                      <i>
                        <FaFacebookF />
                      </i>
                    </Link>
                    <Link to="https://t.me/nsurailway" className="cs_center">
                      <i>
                        <FaTelegramPlane />
                      </i>
                    </Link>
                    <Link
                      to="https://twitter.com/nsurailway"
                      className="cs_center"
                    >
                      <i>
                        <FaTwitter />
                      </i>
                    </Link>
                    <Link
                      to="https://www.instagram.com/nsurailway"
                      className="cs_center"
                    >
                      <i>
                        <FaInstagram />
                      </i>
                    </Link>
                    <Link
                      to="https://www.youtube.com/@nsurailway"
                      className="cs_center"
                    >
                      <i>
                        <FaYoutube />
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to={menu.logoLink}>
                  <img
                    src={menu.logoUrl}
                    style={{ height: "70px" }}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="cs_main_header_right ">
                <div className="cs_nav cs_primary_color ">
                  <ul
                    className={`cs_nav_list ${isShowMobileMenu && "cs_active"}`}
                  >
                    {menu.navItems.map((item, index) => (
                      <li
                        className={
                          item.subItems ? "menu-item-has-children" : ""
                        }
                        key={index}
                      >
                        <Link
                          to={item.href}
                          onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                        >
                          {item.label}
                        </Link>
                        {item.subItems && (
                          <ul
                            style={{
                              display: openMobileSubmenuIndex.includes(index)
                                ? "block"
                                : "none",
                            }}
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  to={subItem.href}
                                  onClick={() =>
                                    setIsShowMobileMenu(!isShowMobileMenu)
                                  }
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                        {item.subItems?.length && (
                          <span
                            className={`cs_menu_dropdown_toggle ${
                              openMobileSubmenuIndex.includes(index)
                                ? "active"
                                : ""
                            }`}
                            onClick={() => handleOpenMobileSubmenu(index)}
                          >
                            <span></span>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`cs_menu_toggle ${
                      isShowMobileMenu && "cs_toggle_active"
                    }`}
                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                  >
                    <span></span>
                  </span>
                </div>
                {/* <div className="cs_search_wrap">
                  <div
                    className="cs_search_toggle cs_center"
                    onClick={() => setIsSearchActive(!isSearchActive)}
                  >
                    <i>
                      <HiMiniMagnifyingGlass />
                    </i>
                  </div>
                  <form
                    action="#"
                    className={`cs_header_search_form ${
                      isSearchActive ? "active" : ""
                    }`}
                  >
                    <div className="cs_header_search_form_in">
                      <input
                        type="text"
                        placeholder="Search"
                        className="cs_header_search_field"
                      />
                      <button className="cs_header_submit_btn">
                        <i>
                          <HiMiniMagnifyingGlass />
                        </i>
                      </button>
                    </div>
                  </form>
                </div> */}
                <Link to={menu.btnUrl} className="cs_btn cs_style_1 cs_color_1">
                  <span>{menu.btnText}</span>
                  <i>
                    <FaAnglesRight />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {variant == "cs_type_1" && (
          <div className="cs_main_header_shape">
            <svg
              width={1679}
              height={112}
              viewBox="0 0 1679 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0L1679 0.014C1679 0.014 1639 23.128 1639 48.261V111.014H40V47.351C40 22.567 0 0 0 0Z"
                fill="#2EA6F7"
              />
              <path
                d="M10 0L1669 0.014C1669 0.014 1629 23.128 1629 48.261V111.014H50V47.351C50 22.567 10 0 10 0Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </header>
      {isTopBar && <div className="cs_site_header_spacing_150" />}
    </>
  );
};

export default Header;
