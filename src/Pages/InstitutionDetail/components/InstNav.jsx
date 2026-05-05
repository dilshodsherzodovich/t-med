import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Menu, X } from "lucide-react";
import "./InstNav.scss";

const NAV_ITEMS = [
  { label: "Biz haqimizda", href: "#about" },
  { label: "Rahbariyat", href: "#leadership" },
  { label: "Yangiliklar", href: "#news" },
  { label: "Aloqa", href: "#contact" },
];

export default function InstNav({ title }) {
  const { lang } = useParams();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.65);

      // Active section tracking
      const sections = ["about", "leadership", "gallery", "news", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav className={`inst-nav${scrolled ? " inst-nav--solid" : ""}`}>
      <div className="inst-nav-inner">
        <Link to={`/${lang}/institution-categories`} className="inst-nav-back">
          <ArrowLeft size={15} />
          <span>Orqaga</span>
        </Link>

        <span className={`inst-nav-name${scrolled ? " inst-nav-name--show" : ""}`}>
          {title}
        </span>

        <ul className="inst-nav-links">
          {NAV_ITEMS.map((item) => {
            const id = item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={active === id ? "inst-nav-link--active" : ""}
                  onClick={(e) => scrollTo(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className="inst-nav-burger"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="inst-nav-drawer">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
