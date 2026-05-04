import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { FaTelegramPlane, FaFacebookF, FaYoutube, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaRegClock, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const data = {
    logo: "/logo.svg",
    backgroundImage: "/assets/img/footer_bg.jpg",
    contactText: t("footer.contact.reception"),
    contactText2: t("footer.contact.address"),
    contactText3: "+998 (71) 299 98 27",
    facebookHref: "#",
    telegramHref: "#",
    twitterHref: "#",
    instagramHref: "#",
    youtubeHref: "#",
    widgets: [
      {
        title: t("footer.activities.title"),
        links: [
          { href: `/${lang}/about`, text: t("footer.activities.sublinks.link1") },
          { href: `/${lang}/management`, text: t("footer.activities.sublinks.link2") },
          { href: `/${lang}/departments`, text: t("footer.activities.sublinks.link3") },
          { href: `/cooperation`, text: t("footer.activities.sublinks.link4") },
          { href: `/${lang}/blog`, text: t("footer.activities.sublinks.link5") },
          { href: `/${lang}/contact`, text: t("footer.activities.sublinks.link6") },
        ],
      },
      {
        title: t("footer.quickLinks.title"),
        links: [
          { href: `/${lang}`, text: t("footer.quickLinks.sublinks.home") },
          { href: `/${lang}/about`, text: t("footer.quickLinks.sublinks.about") },
          { href: `/${lang}/service`, text: t("footer.quickLinks.sublinks.services") },
          { href: `/${lang}/blog`, text: t("footer.quickLinks.sublinks.media") },
          { href: `/${lang}/docs`, text: t("footer.quickLinks.sublinks.docs") },
          { href: `/${lang}/contact`, text: t("footer.quickLinks.sublinks.contact") },
        ],
      },
    ],
    copyrightText: `Copyright © ${new Date().getFullYear()} ${t("root.copyright")}`,
    bottomLinks: [
      { text: "MAXFIYLIK SIYOSATI", href: `/${lang}/privacy` },
      { text: "FOYDALANISH SHARTLARI", href: `/${lang}/terms` },
    ]
  };

  return (
    <footer style={{ 
      backgroundColor: '#0f172a', 
      backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.95)), url(${data.backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#ffffff', 
      paddingTop: '80px', 
      paddingBottom: '30px' 
    }}>
      <div className="container">
        <div className="row justify-content-between mb-5">
          {/* Logo & Contact Column */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <Link to={`/${lang}`} className="d-flex align-items-center mb-4 text-decoration-none">
              <img src={data.logo} alt="Logo" style={{ height: '52px', marginRight: '15px' }} />
              <div>
                <h4 className="mb-0" style={{ color: '#ffffff', fontWeight: '800', fontSize: '18px', letterSpacing: '0.5px', textShadow: '0 0 15px rgba(26, 110, 247, 0.4)' }}>
                  O'zbekiston Temir Yo'llari AJ
                </h4>
                <div style={{ color: '#1a6ef7', fontSize: '13px', fontWeight: '700', letterSpacing: '1px', textShadow: '0 0 15px rgba(26, 110, 247, 0.4)' }}>
                  Lokomotivlardan foydalanish boshqarmasi
                </div>
              </div>
            </Link>

            <ul className="list-unstyled d-flex flex-column gap-3 mb-4">
              <li className="d-flex align-items-start gap-3">
                <FaRegClock size={18} style={{ color: '#1a6ef7', marginTop: '2px' }} />
                <span style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: data.contactText }} />
              </li>
              <li className="d-flex align-items-start gap-3">
                <FaLocationDot size={18} style={{ color: '#1a6ef7', marginTop: '2px' }} />
                <span style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: data.contactText2 }} />
              </li>
              <li className="d-flex align-items-start gap-3">
                <FaPhoneAlt size={18} style={{ color: '#1a6ef7', marginTop: '2px' }} />
                <span style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: data.contactText3 }} />
              </li>
            </ul>

            <div className="d-flex gap-3">
              <a href={data.facebookHref} className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.05)', color: '#94a3b8', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a6ef7'; e.currentTarget.style.color = '#ffffff'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#94a3b8'; }}>
                <FaFacebookF />
              </a>
              <a href={data.telegramHref} className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.05)', color: '#94a3b8', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a6ef7'; e.currentTarget.style.color = '#ffffff'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#94a3b8'; }}>
                <FaTelegramPlane />
              </a>
              <a href={data.twitterHref} className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.05)', color: '#94a3b8', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a6ef7'; e.currentTarget.style.color = '#ffffff'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#94a3b8'; }}>
                <FaXTwitter />
              </a>
              <a href={data.instagramHref} className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.05)', color: '#94a3b8', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a6ef7'; e.currentTarget.style.color = '#ffffff'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#94a3b8'; }}>
                <FaInstagram />
              </a>
              <a href={data.youtubeHref} className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255,255,255,0.05)', color: '#94a3b8', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1a6ef7'; e.currentTarget.style.color = '#ffffff'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#94a3b8'; }}>
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Nav Links Columns */}
          {data.widgets.map((widget, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 style={{ color: '#ffffff', fontSize: '13px', fontWeight: '800', letterSpacing: '1px', marginBottom: '25px', textTransform: 'uppercase' }}>
                {widget.title}
              </h5>
              <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-3">
                {widget.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      to={link.href} 
                      style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none', transition: 'color 0.3s ease' }} 
                      onMouseEnter={(e) => e.target.style.color = '#1a6ef7'} 
                      onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '30px' }}></div>

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div style={{ color: '#64748b', fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', textAlign: 'center' }}>
            {data.copyrightText}
          </div>
          <div className="d-flex gap-4">
            {data.bottomLinks.map((link, idx) => (
              <Link 
                key={idx} 
                to={link.href} 
                style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textDecoration: 'none', letterSpacing: '0.5px', transition: 'color 0.3s ease' }} 
                onMouseEnter={(e) => e.target.style.color = '#ffffff'} 
                onMouseLeave={(e) => e.target.style.color = '#64748b'}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
