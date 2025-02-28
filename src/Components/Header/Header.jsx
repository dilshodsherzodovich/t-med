import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot, FaYoutube } from "react-icons/fa6";
import roundicon from "/assets/img/icons/360-degrees.png";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { MdLogout } from "react-icons/md";

const Header = ({ isTopBar, variant }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { lang } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const isAuthOpen = searchParams.get("auth");

  const [username, setUsername] = useState();
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
    queryFn: () => sendRequest({ url: `/reception/management-departments//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const menu = {
    email: "nsu-railway@gmail.com",
    location: t("root.address"),
    logoUrl: "/assets/img/logo.PNG",
    logoLink: `/${lang}`,
    navItems: [
      {
        label: t("navlinks.about.title"),
        href: `/${lang}/about`,
        subItems: [
          {
            label: t("navlinks.about.sublinks.instituion"),
            href: `/${lang}/about`,
          },
          {
            label: t("navlinks.about.sublinks.management"),
            href: `/${lang}/management`,
          },
          {
            label: t("navlinks.about.sublinks.departments"),
            href: `/${lang}/departments`,
            subItems: departments?.results?.length
              ? departments?.results?.map((item) => ({
                  label: item?.name,
                  href: `/${lang}/departments/${item?.id}`,
                }))
              : [],
          },
          {
            label: t("navlinks.about.sublinks.institutions"),
            href: `/${lang}/institution-categories`,
            subItems: institutionCategories?.results?.length
              ? institutionCategories?.results?.map((item) => ({
                  label: item?.name,
                  href: `/${lang}/institutions?category=${item?.id}&name=${item?.name}`,
                }))
              : [],
          },
        ],
      },
      {
        label: t("navlinks.career.title"),
        href: "",
        subItems: [
          // {
          //   label: t("navlinks.career.sublinks.onlineSurvey"),
          //   href: `/${lang}/review`,
          // },
          {
            label: t("navlinks.career.sublinks.memorandums"),
            href: `/${lang}/careers/1?category=memorandum`,
          },
          {
            label: t("navlinks.career.sublinks.cooperation"),
            href: "/cooperation",
          },
          {
            label: t("navlinks.career.sublinks.trips"),
            href: `/${lang}/careers/3?category=trip`,
          },
          {
            label: t("navlinks.career.sublinks.meetings"),
            href: `/${lang}/careers/4?category=meeting`,
          },
          {
            label: t("navlinks.career.sublinks.events"),
            href: `/${lang}/careers/5?category=events`,
          },
        ],
      },
      {
        label: t("navlinks.services.title"),
        href: `/${lang}/service`,
      },

      {
        label: t("navlinks.media.title"),
        href: `/${lang}`,
        subItems: [
          {
            label: t("navlinks.media.sublinks.contact"),
            href: `/${lang}/contact`,
          },
          { label: t("navlinks.media.sublinks.news"), href: `/${lang}/blog` },
          {
            label: t("navlinks.media.sublinks.gettingReady"),
            href: "https://gov.uz/oz/fvv/sections/aholini-favqulodda-vaziyatlarda-togri-harakat-qilishga-orgatuvchi-foydali-havolalar",
            target: "_blank",
          },
          {
            label: t("navlinks.media.sublinks.gallery"),
            href: `/${lang}/gallery`,
          },
          {
            label: t("navlinks.media.sublinks.video"),
            href: "https://www.youtube.com/@nsurailway",
            target: "_blank",
          },
        ],
      },
      {
        label: t("navlinks.docs.title"),
        href: `/${lang}/docs`,
        subItems: allDocs?.results?.length
          ? allDocs?.results?.map((item) => ({
              label: item?.name,
              href: `/${lang}/docs?type=${item?.id}`,
            }))
          : [],
      },
      {
        label: "E-map",
        href: `/${lang}/gmap`,
      },
      {
        label: t("navlinks.live.title"),
        href: `/${lang}/livestream`,
      },
      {
        label: t("navlinks.forAdmins.title"),
        href: "https://admin.nsu-railway.uz/login",
        target: "_blank",
      },
      {
        label: t("navlinks.contact.title"),
        href: `/${lang}/contact`,
      },
    ],
  };

  const handleOpenMobileSubmenu = (index) => {
    if (openMobileSubmenuIndex.includes(index)) {
      setOpenMobileSubmenuIndex((prev) => prev.filter((f) => f !== index));
    } else {
      setOpenMobileSubmenuIndex((prev) => [...prev, index]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUsername("");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    setUsername(user?.username);
  }, [isAuthOpen]);

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
          <div className="cs_top_header desktop cs_blue_bg cs_white_color">
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
                  <div className="cs_social_btns cs_style_1 d-flex align-items-center">
                    <img
                      src={roundicon}
                      style={{
                        width: 30,
                        height: 30,
                        marginRight: 10,
                        cursor: "pointer",
                      }}
                      alt=""
                      onClick={() => navigate("/virtour")}
                    />
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

                <div className="d-flex align-items-center gap-2">
                  {username ? (
                    <div className="d-flex align-items-center gap-2">
                      <span>{username}</span>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={handleLogout}
                      >
                        <MdLogout fontSize={22} />
                      </span>
                    </div>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => setSearchParams({ auth: true })}
                    >
                      Kirish
                    </button>
                  )}
                </div>
                {/* <AuthModal /> */}
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
                          target={item?.target}
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
                                  target={subItem?.target}
                                  to={subItem.href}
                                  onClick={() =>
                                    setIsShowMobileMenu(!isShowMobileMenu)
                                  }
                                >
                                  {subItem.label}
                                </Link>
                                {subItem.subItems && (
                                  <ul
                                    style={{
                                      display: openMobileSubmenuIndex.includes(
                                        index
                                      )
                                        ? "block"
                                        : "none",
                                    }}
                                    className="double-subItem"
                                  >
                                    {subItem.subItems.map(
                                      (subItem, subIndex) => (
                                        <li key={subIndex}>
                                          <Link
                                            to={subItem.href}
                                            onClick={() =>
                                              setIsShowMobileMenu(
                                                !isShowMobileMenu
                                              )
                                            }
                                          >
                                            {subItem.label}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
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

                    <div className="header_mobile_info_box container">
                      <ul className="mobile_links p-0 mb-4">
                        <li className="d-flex align-items-center gap-1">
                          <i>
                            <FaEnvelope />
                          </i>
                          <Link to={`mailto:${menu.email}`}>{menu.email}</Link>
                        </li>
                        <li className="d-flex align-items-center gap-1">
                          <i>
                            <FaLocationDot />
                          </i>
                          {menu.location}
                        </li>
                      </ul>

                      <div className="d-flex social_btns">
                        <Link
                          to="https://www.facebook.com/nsurailways"
                          className="cs_center"
                        >
                          <i>
                            <FaFacebookF />
                          </i>
                        </Link>
                        <Link
                          to="https://t.me/nsurailway"
                          className="cs_center"
                        >
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
                        <LanguageSwitcher />
                      </div>

                      <div className="mt-3">
                        {username ? (
                          <div className="d-flex align-items-center gap-2">
                            <span>{username}</span>
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={handleLogout}
                            >
                              <MdLogout fontSize={22} />
                            </span>
                          </div>
                        ) : (
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              setIsShowMobileMenu(!isShowMobileMenu);
                              setSearchParams({ auth: true });
                            }}
                          >
                            Kirish
                          </button>
                        )}
                      </div>
                    </div>
                  </ul>
                  <LanguageSwitcher />
                  {/* {username ? (
                    <div className="d-flex align-items-center gap-2">
                      <span>{username}</span>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={handleLogout}
                      >
                        <MdLogout fontSize={22} />
                      </span>
                    </div>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={() => setSearchParams({ auth: true })}
                    >
                      Kirish
                    </button>
                  )} */}
                  <span
                    className={`cs_menu_toggle ${
                      isShowMobileMenu && "cs_toggle_active"
                    }`}
                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                  >
                    <span></span>
                  </span>
                </div>
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
        {/* <LanguageSwitcher /> */}
      </header>

      {isTopBar && <div className="cs_site_header_spacing_150" />}
    </>
  );
};

export default Header;
