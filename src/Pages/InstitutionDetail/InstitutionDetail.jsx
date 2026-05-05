import { useMemo } from "react";
import { useHttp } from "../../hooks/useHttp";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import CountUp from "react-countup";
import { formatDate } from "../../utils/format-date";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import InstNav from "./components/InstNav";
import InstHero from "./components/InstHero";
import ExpandableGallery from "./components/ExpandableGallery";
import Quiz from "../../Components/InstitutionDetails/Quiz";
import YandexMap from "./components/YandexMap";
import AppointmentSection from "../../Components/AppointmentSection";
import Services from "./components/Services";

import "./InstitutionDetail.scss";

// ── Section wrapper ───────────────────────────────────────────────────────────

const Section = ({ id, className = "", children, style }) => (
  <section id={id} className={`inst-section ${className}`} style={style}>
    <div className="inst-container">{children}</div>
  </section>
);

const SectionLabel = ({ children }) => (
  <div className="inst-section-label">
    <span className="inst-section-label-bar" />
    {children}
  </div>
);

// ── About + Leadership combined ───────────────────────────────────────────────

const AboutSection = ({ orgData, ceoData }) => {
  const imgs = orgData?.images || [];
  const img0 = imgs[0] || null;
  const img1 = imgs[1] || null;
  const img2 = imgs[2] || null;

  return (
    <Section id="about" className="inst-about-section">
      {/* Centered badge + heading */}
      <div className="inst-about-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="inst-about-badge">Biz haqimizda</span>
        </motion.div>
        <motion.h2
          className="inst-about-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <span className="inst-about-heading-dark">
            {orgData?.name?.split(" ").slice(0, 3).join(" ")}{" "}
          </span>
          <span className="inst-about-heading-blue">
            {orgData?.name?.split(" ").slice(3).join(" ")}
          </span>
        </motion.h2>
      </div>

      {/* Two-column layout */}
      <div className="inst-about-cols">
        {/* Left — image grid */}
        <motion.div
          className="inst-about-img-col"
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <div className="inst-about-img-grid">
            <div className="inst-about-img-large">
              {img0 ? (
                <img src={img0} alt={orgData?.name} />
              ) : (
                <div className="inst-about-img-placeholder" />
              )}
            </div>
            <div className="inst-about-img-row">
              {img1 ? (
                <img src={img1} alt="" />
              ) : (
                <div className="inst-about-img-placeholder" />
              )}
              {img2 ? (
                <img src={img2} alt="" />
              ) : (
                <div className="inst-about-img-placeholder" />
              )}
            </div>
          </div>
        </motion.div>

        {/* Right — info card + director card */}
        <motion.div
          className="inst-about-info-col"
          initial={{ opacity: 0, x: 48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          {/* Info card */}
          <div className="inst-about-info-card">
            <div className="inst-about-card-label">
              <span className="inst-about-card-line" />
              Ma'lumot
            </div>

            <div
              className="inst-about-desc rich-text"
              dangerouslySetInnerHTML={{ __html: orgData?.description }}
            />

            {/* Stats row */}
            <div className="inst-about-stats">
              {orgData?.employeeCount > 0 && (
                <div className="inst-about-stat">
                  <span className="inst-about-stat-value">
                    <CountUp end={orgData.employeeCount} duration={2.5} />+
                  </span>
                  <span className="inst-about-stat-label">Xodimlar</span>
                </div>
              )}
              {orgData?.avgRating > 0 && (
                <div className="inst-about-stat">
                  <span className="inst-about-stat-value inst-about-stat-accent">
                    {orgData.avgRating}
                  </span>
                  <span className="inst-about-stat-label">Reyting / 5</span>
                </div>
              )}
              {orgData?.posts?.length > 0 && (
                <div className="inst-about-stat">
                  <span className="inst-about-stat-value">
                    {orgData.posts.length}
                  </span>
                  <span className="inst-about-stat-label">Yangiliklar</span>
                </div>
              )}
            </div>
          </div>

          {/* Director card */}
          {(ceoData?.fio || ceoData?.image) && (
            <motion.div
              className="inst-director-card"
              id="leadership"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              {ceoData?.image && (
                <div className="inst-director-img-wrap">
                  <img
                    src={ceoData.image}
                    alt={ceoData.fio}
                    className="inst-director-img"
                  />
                </div>
              )}
              <div className="inst-director-info">
                <div className="inst-director-role">Rahbar</div>
                <div className="inst-director-name">{ceoData?.fio}</div>
                {ceoData?.specialist && (
                  <div className="inst-director-position">
                    {ceoData.specialist}
                  </div>
                )}
                <div className="inst-director-contacts">
                  {ceoData?.reception_number && (
                    <a
                      href={`tel:${ceoData.reception_number}`}
                      className="inst-director-contact"
                    >
                      <Phone size={13} />
                      {ceoData.reception_number}
                    </a>
                  )}
                  {ceoData?.email && (
                    <a
                      href={`mailto:${ceoData.email}`}
                      className="inst-director-contact"
                    >
                      <Mail size={13} />
                      {ceoData.email}
                    </a>
                  )}
                  {ceoData?.reception_days && (
                    <div className="inst-director-contact inst-director-contact--plain">
                      <Calendar size={13} />
                      {ceoData.reception_days}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </Section>
  );
};

// ── Gallery ───────────────────────────────────────────────────────────────────

const GallerySection = ({ images }) => {
  if (!images?.length) return null;
  return (
    <Section id="gallery" className="inst-section--gray">
      <SectionLabel>Galereya</SectionLabel>
      <ExpandableGallery images={images} />
    </Section>
  );
};

// ── News ──────────────────────────────────────────────────────────────────────

const NewsSection = ({ posts, lang }) => {
  if (!posts?.length) return null;
  return (
    <Section id="news" className="inst-section--light">
      <SectionLabel>Yangiliklar</SectionLabel>
      <div className="inst-news-grid">
        {posts.slice(0, 6).map((post, i) => {
          const images = post?.post_images?.map((p) => p.image).filter(Boolean) || [];
          const animDuration = images.length * 4;
          return (
            <motion.div
              key={post.id}
              className="inst-news-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* All images — crossfade cycle */}
              {images.map((src, imgIdx) => (
                <img
                  key={imgIdx}
                  src={src}
                  alt={post.title}
                  className="inst-news-card-img"
                  style={{
                    animationDuration: `${animDuration}s`,
                    animationDelay: `${imgIdx * 4}s`,
                    opacity: images.length === 1 ? 0.88 : 0,
                    animationName: images.length > 1 ? "inst-card-crossfade" : "none",
                  }}
                />
              ))}

              {/* Dark overlay */}
              <div className="inst-news-overlay" />

              {/* Content layer */}
              <div className="inst-news-content">
                {/* Top: date */}
                <div className="inst-news-date">
                  <Calendar size={12} />
                  {formatDate(post.created_at)}
                </div>

                {/* Bottom: title + progress + link */}
                <div className="inst-news-bottom">
                  <Link
                    to={`/${lang}/institution/blog/${post.id}`}
                    className="inst-news-title"
                  >
                    {post.title}
                  </Link>
                  <div className="inst-news-progress" />
                  <Link
                    to={`/${lang}/institution/blog/${post.id}`}
                    className="inst-news-link"
                  >
                    BATAFSIL O'QISH →
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

// ── Contact ───────────────────────────────────────────────────────────────────

const ContactSection = ({ orgData, long, lat }) => (
  <Section id="contact" className="inst-section--gray">
    <SectionLabel>Aloqa</SectionLabel>
    <div className="inst-contact-grid">
      <div className="inst-contact-cards">
        {orgData?.address && (
          <div className="inst-contact-card">
            <span className="inst-contact-icon">
              <MapPin size={20} />
            </span>
            <div>
              <div className="inst-contact-label">Manzil</div>
              <div className="inst-contact-value">{orgData.address}</div>
            </div>
          </div>
        )}
        {orgData?.phone && (
          <div className="inst-contact-card">
            <span className="inst-contact-icon">
              <Phone size={20} />
            </span>
            <div>
              <div className="inst-contact-label">Telefon</div>
              <a href={`tel:${orgData.phone}`} className="inst-contact-value">
                {orgData.phone}
              </a>
            </div>
          </div>
        )}
        {orgData?.email && (
          <div className="inst-contact-card">
            <span className="inst-contact-icon">
              <Mail size={20} />
            </span>
            <div>
              <div className="inst-contact-label">Email</div>
              <a
                href={`mailto:${orgData.email}`}
                className="inst-contact-value"
              >
                {orgData.email}
              </a>
            </div>
          </div>
        )}
      </div>

      {long && lat && (
        <div className="inst-map-wrap">
          <YandexMap long={long} lat={lat} />
        </div>
      )}
    </div>
  </Section>
);


// ── Main ──────────────────────────────────────────────────────────────────────

function InstitutionDetail() {
  const sendRequest = useHttp();
  const { slug, lang } = useParams();
  const { t } = useTranslation();

  const { data: detail, isLoading } = useQuery({
    queryKey: ["institutions", slug],
    queryFn: () =>
      sendRequest({ url: `/reception/organization/detail/${slug}` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const orgData = useMemo(
    () => ({
      id: detail?.id,
      name: detail?.title,
      description: detail?.description,
      address: detail?.address,
      phone: detail?.director?.reception_number,
      email: detail?.director?.email,
      employeeCount: detail?.count_of_employees,
      images: detail?.organization_images?.map((i) => i?.image) || [],
      organization_questions: detail?.organization_questions,
      long: detail?.longitude,
      lat: detail?.latitude,
      doctors: detail?.doctors,
      services: detail?.filtered_service_types,
      posts: detail?.organization_posts,
      avgRating: detail?.avg_rating,
    }),
    [detail],
  );

  const appointmentData = useMemo(() => {
    if (!orgData?.doctors?.length) return null;
    return {
      subtitle: "Bizning shifokorlarimiz",
      title: "",
      doctorsData: orgData.doctors.map((doc) => ({
        id: doc.id,
        name: doc.full_name,
        specialty: doc.position,
        imageUrl: doc.image,
        profileLink: `?doctor=${doc.id}`,
        tel: doc.phone,
        email: doc.email,
      })),
    };
  }, [orgData?.doctors]);

  if (isLoading) {
    return (
      <div className="inst-loading">
        <div className="inst-loading-spinner" />
      </div>
    );
  }

  return (
    <div className="inst-page">
      <InstNav title={orgData.name} />
      <InstHero orgData={orgData} />

      <div className="inst-body">
        <AboutSection orgData={orgData} ceoData={detail?.director} />
        <GallerySection images={orgData.images} />

        {/* Services */}
        {orgData.services?.length > 0 && (
          <Section>
            <Services serviceCategories={orgData.services} />
          </Section>
        )}

        {/* Doctors */}
        {appointmentData?.doctorsData?.length > 0 && (
          <Section className="inst-section--light">
            <AppointmentSection data={appointmentData} />
          </Section>
        )}

        <NewsSection posts={orgData.posts} lang={lang} />

        {/* Quiz */}
        {orgData.organization_questions?.length > 0 && (
          <Section>
            <Quiz
              quizes={orgData.organization_questions}
              isLoading={isLoading}
            />
          </Section>
        )}

        <ContactSection
          orgData={orgData}
          long={orgData.long}
          lat={orgData.lat}
        />
      </div>
    </div>
  );
}

export default InstitutionDetail;
