import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaPhone,
} from "react-icons/fa";
import { FaYoutube, FaHouse, FaShieldHalved } from "react-icons/fa6";
import Flag from "react-flagkit";
import { Link, useLocation, useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { useTranslation } from "react-i18next";
import { useRouter } from "../../hooks/use-router";

const LANGS = [
  { code: "uz", label: "UZ", flag: "UZ" },
  { code: "ru", label: "RU", flag: "RU" },
  { code: "en", label: "EN", flag: "US" },
];

const Header = ({ isTopBar, variant }) => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const location = useLocation();
  const router = useRouter();

  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState();
  const [clock, setClock] = useState("");
  const sendRequest = useHttp();

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(
        `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`,
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const { data: allDocs } = useQuery({
    queryKey: ["docs"],
    queryFn: () => sendRequest({ url: `/reception/decisions//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const { data: organizations } = useQuery({
    queryKey: ["organizations"],
    queryFn: () => sendRequest({ url: `/reception/all/organization/` }),
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

  const navItems = [
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
            ? departments.results.map((item) => ({
                label: item?.name,
                href: `/${lang}/departments/${item?.id}`,
              }))
            : [],
        },
        {
          label: t("navlinks.about.sublinks.institutions"),
          href: `/${lang}/institution-categories`,
          subItems: (organizations?.results ?? organizations)?.length
            ? (organizations?.results ?? organizations).map((org) => ({
                label: org?.title,
                href: `/${lang}/muassasalar/${org?.slug}`,
              }))
            : [],
        },
      ],
    },
    {
      label: t("navlinks.media.title"),
      href: `/${lang}/blog`,
      subItems: [
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
          href: "#",
          target: "_blank",
        },
      ],
    },
    {
      label: t("navlinks.docs.title"),
      href: `/${lang}/docs`,
      subItems: allDocs?.results?.length
        ? allDocs.results.map((item) => ({
            label: item?.name,
            href: `/${lang}/docs?type=${item?.id}`,
          }))
        : [],
    },
    {
      label: t("navlinks.forAdmins.title"),
      href: "https://mydepo.uz/",
      target: "_blank",
    },
  ];

  const isActive = (href) => {
    if (!href || href.startsWith("http")) return false;
    const path = location.pathname;
    const base = `/${lang}`;
    if (href === base) return path === base;
    return path.startsWith(href);
  };

  const handleOpenMobileSubmenu = (index) => {
    setOpenMobileSubmenuIndex((prev) =>
      prev.includes(index) ? prev.filter((f) => f !== index) : [...prev, index],
    );
  };

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    const parts = location.pathname.split("/");
    parts.splice(1, 1, code);
    router.replace(parts.join("/"));
    router.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      const cur = window.scrollY;
      if (cur > prevScrollPos) {
        setIsSticky("cs_gescout_sticky");
      } else if (cur !== 0) {
        setIsSticky("cs_gescout_sticky cs_gescout_show");
      } else {
        setIsSticky();
      }
      setPrevScrollPos(cur);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <header
        className={`cs_site_header cs_style_1 ${variant || ""} cs_sticky_header ${isSticky || ""}`}
      >
        {/* ── Topbar ── */}
        <div className="cs_top_header">
          <div className="cs_top_header_in">
            <div className="cs_top_left">
              <div className="cs_official_badge">
                <FaShieldHalved />
                <span>Rasmiy sayt</span>
              </div>
              <div className="cs_top_divider" />
              <span className="cs_top_clock">{clock}</span>
              <div className="cs_top_divider" />
              <div className="cs_top_socials">
                <Link to="#">
                  <FaFacebookF />
                </Link>
                <Link to="#">
                  <FaTelegramPlane />
                </Link>
                <Link to="#">
                  <FaYoutube />
                </Link>
                <Link to="#">
                  <FaInstagram />
                </Link>
              </div>
            </div>
            <div className="cs_top_right">
              <a href="tel:+998712378771" className="cs_top_contact">
                <FaPhone />
                <span className="cs_top_label">TELEFON</span>
                <strong>+99871 237 87 71</strong>
              </a>
              <a href="mailto:info@locdep.uz" className="cs_top_contact">
                <FaEnvelope />
                <span className="cs_top_label">ELEKTRON POCHTA</span>
                <strong>info@locdep.uz</strong>
              </a>
            </div>
          </div>
        </div>

        {/* ── Main header ── */}
        <div className="cs_main_header">
          <div className="cs_main_header_in">
            {/* Brand */}
            <div className="cs_main_header_left">
              <Link className="cs_site_branding" to={`/${lang}`}>
                <img src="/logo.svg" style={{ height: "52px" }} alt="Logo" />
              </Link>
              <div className="cs_logo_names d-flex flex-column justify-content-center">
                <span className="cs_logo_line1" style={{ fontWeight: '800', fontSize: '16px', lineHeight: '1.2' }}>
                  O'zbekiston Temir Yo'llari AJ
                </span>
                <span className="cs_logo_line2" style={{ fontWeight: '700', fontSize: '12px', color: '#1a6ef7' }}>
                  Lokomotivlardan foydalanish boshqarmasi
                </span>
              </div>
            </div>

            {/* Nav */}
            <div className="cs_main_header_center">
              <div className="cs_nav">
                <ul
                  className={`cs_nav_list ${isShowMobileMenu ? "cs_active" : ""}`}
                >
                  <li>
                    <Link
                      to={`/${lang}`}
                      className={`cs_nav_home${location.pathname === `/${lang}` ? " cs_nav_active" : ""}`}
                      onClick={() => setIsShowMobileMenu(false)}
                    >
                      <FaHouse />
                    </Link>
                  </li>

                  {navItems.map((item, index) => (
                    <li
                      className={item.subItems ? "menu-item-has-children" : ""}
                      key={index}
                    >
                      <Link
                        to={item.href}
                        target={item?.target}
                        className={isActive(item.href) ? "cs_nav_active" : ""}
                        onClick={() => setIsShowMobileMenu(false)}
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
                          {item.subItems.map((sub, si) => (
                            <li key={si}>
                              <Link
                                to={sub.href}
                                target={sub?.target}
                                onClick={() => setIsShowMobileMenu(false)}
                              >
                                {sub.label}
                              </Link>
                              {sub.subItems && (
                                <ul className="double-subItem">
                                  {sub.subItems.map((ss, ssi) => (
                                    <li key={ssi}>
                                      <Link
                                        to={ss.href}
                                        onClick={() =>
                                          setIsShowMobileMenu(false)
                                        }
                                      >
                                        {ss.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.subItems?.length > 0 && (
                        <span
                          className={`cs_menu_dropdown_toggle ${
                            openMobileSubmenuIndex.includes(index)
                              ? "active"
                              : ""
                          }`}
                          onClick={() => handleOpenMobileSubmenu(index)}
                        >
                          <span />
                        </span>
                      )}
                    </li>
                  ))}

                  {/* Mobile extras */}
                  <div className="header_mobile_info_box container">
                    <ul className="mobile_links p-0 mb-4">
                      <li className="d-flex align-items-center gap-1">
                        <i>
                          <FaEnvelope />
                        </i>
                        <Link to="mailto:info@locdep.uz">info@locdep.uz</Link>
                      </li>
                    </ul>
                    <div className="d-flex social_btns">
                      <Link to="#">
                        <i>
                          <FaFacebookF />
                        </i>
                      </Link>
                      <Link to="#">
                        <i>
                          <FaTelegramPlane />
                        </i>
                      </Link>
                      <Link to="#">
                        <i>
                          <FaInstagram />
                        </i>
                      </Link>
                      <Link to="#">
                        <i>
                          <FaYoutube />
                        </i>
                      </Link>
                    </div>
                  </div>
                </ul>
              </div>
            </div>

            {/* Right: lang + CTA */}
            <div className="cs_main_header_right">
              <div className="cs_lang_switch">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    className={`cs_lang_btn${lang === l.code ? " active" : ""}`}
                    onClick={() => changeLang(l.code)}
                    aria-label={l.label}
                    title={l.label}
                  >
                    <Flag country={l.flag} size={22} />
                  </button>
                ))}
              </div>

              <Link className="cs_header_cta" to={`/${lang}/contact`}>
                {t("navlinks.contact.title")}
              </Link>

              <span
                className={`cs_menu_toggle ${isShowMobileMenu ? "cs_toggle_active" : ""}`}
                onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
              >
                <span />
              </span>
            </div>
          </div>
        </div>
      </header>

      {isTopBar && <div className="cs_site_header_spacing_150" />}
    </>
  );
};

export default Header;
