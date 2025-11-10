import { useMemo, useState, useEffect, useRef, useCallback } from "react";
import {
  Heart,
  // Brain,
  // Activity,
  // Syringe,
  // FlaskConical,
  Timer,
  BadgeDollarSign,
  Stethoscope,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./Services.scss";
import { useTranslation } from "react-i18next";
import Pagination from "../../../Components/Pagination";

// const services = [
//   {
//     id: 1,
//     title: "Yurak sinovlari",
//     icon: <Heart />,
//     category: "Cardiology",
//     price: 150.0,
//     duration: 45,
//   },
//   {
//     id: 2,
//     title: "Nevrologik sinovlar",
//     icon: <Brain />,
//     category: "Neurology",
//     price: 200.0,
//     duration: 60,
//   },
//   {
//     id: 3,
//     title: "Fizik terapiya",
//     icon: <Activity />,
//     category: "Therapy",
//     price: 100.0,
//     duration: 30,
//   },
//   {
//     id: 4,
//     title: "Kichik jarrohlik",
//     icon: <Syringe />,
//     category: "Surgery",
//     price: 500.0,
//     duration: 120,
//   },
//   {
//     id: 5,
//     title: "Qon tahlili",
//     icon: <FlaskConical />,
//     category: "Diagnostics",
//     price: 80.0,
//     duration: 15,
//   },
// ];

const Services = ({ serviceCategories }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const servicesPerPage = 12;
  const navRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { t } = useTranslation();
  const categories = useMemo(() => {
    if (!serviceCategories?.length) return [];
    return serviceCategories?.map((item) => ({
      id: item?.id,
      label: item?.title,
      icon: <Stethoscope />,
    }));
  }, [serviceCategories]);

  const services = useMemo(() => {
    if (!serviceCategories?.length) return [];
    const serviceList = [];
    serviceCategories?.forEach((cat) => {
      cat?.services?.forEach((ser) => {
        serviceList.push({
          id: ser?.id,
          title: ser?.title,
          icon: <Heart />,
          category: cat?.id,
          price: ser?.price,
          forRailwayWorkers: ser?.second_price,
          nonResidents: ser?.third_price,
          duration: ser?.duration,
        });
      });
    });
    return serviceList;
  }, [serviceCategories]);

  const filteredServices = useMemo(() => {
    if (!services?.length) return [];
    return services?.filter((service) => {
      return (
        activeCategory === "all" ||
        String(service?.category)?.toLowerCase() == activeCategory
      );
    });
  }, [services, activeCategory]);

  // Pagination logic
  const pageCount = Math.ceil(filteredServices.length / servicesPerPage);
  const offset = currentPage * servicesPerPage;
  const paginatedServices = useMemo(() => {
    return filteredServices.slice(offset, offset + servicesPerPage);
  }, [filteredServices, offset]);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeCategory]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // Check scroll position
  const checkScrollPosition = useCallback(() => {
    if (navRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    // Use setTimeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      checkScrollPosition();
    }, 100);

    const nav = navRef.current;
    if (nav) {
      nav.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
    }
    return () => {
      clearTimeout(timer);
      if (nav) {
        nav.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      }
    };
  }, [categories, checkScrollPosition]);

  const scrollLeft = () => {
    if (navRef.current) {
      navRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
      // Check position after scroll animation
      setTimeout(checkScrollPosition, 300);
    }
  };

  const scrollRight = () => {
    if (navRef.current) {
      navRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
      // Check position after scroll animation
      setTimeout(checkScrollPosition, 300);
    }
  };

  return (
    <div className="services">
      <div className="services-container">
        <div className="services__header">
          <h1>{t("pages.services.subtitle")}</h1>
          <p> Sizning ehtiyojlaringiz uchun kompleks tibbiy yordam </p>
        </div>

        <div className="services__nav-wrapper">
          {canScrollLeft && (
            <button
              className="services__nav-chevron services__nav-chevron--left"
              onClick={scrollLeft}
              aria-label="Scroll left"
            >
              <ChevronLeft />
            </button>
          )}
          <nav ref={navRef} className="services__nav">
            <button
              key="all"
              className={`${
                activeCategory === "all" ? "button active" : "button "
              }`}
              onClick={() => setActiveCategory("all")}
            >
              <Stethoscope />
              Barcha xizmatlar
            </button>
            {categories?.map((category) => (
              <button
                key={category.id}
                className={`${
                  +activeCategory === +category.id ? "button active" : "button "
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon}
                {category.label}
              </button>
            ))}
          </nav>
          {canScrollRight && (
            <button
              className="services__nav-chevron services__nav-chevron--right"
              onClick={scrollRight}
              aria-label="Scroll right"
            >
              <ChevronRight />
            </button>
          )}
        </div>

        <div className="services__grid">
          {paginatedServices.map((service) => (
            <div key={service.id} className="services__card">
              <div className="services__card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <div className="services__card-info">
                <div>
                  <div>
                    <BadgeDollarSign />
                    {t("pages.services.price")}
                  </div>
                  <span>
                    {service.price} {"so'm"}
                  </span>
                </div>

                {/* {service.forRailwayWorkers && (
                  <div>
                    <div>
                      <BadgeDollarSign />
                      {t("pages.services.forRailwayWorkers")}
                    </div>
                    <span>
                      {service.forRailwayWorkers} {"so'm"}
                    </span>
                  </div>
                )}

                {service.nonResidents && (
                  <div>
                    <div>
                      <BadgeDollarSign />
                      {t("pages.services.nonResidents")}
                    </div>
                    <span>
                      {service.nonResidents} {"so'm"}
                    </span>
                  </div>
                )} */}

                <div>
                  <div>
                    <Timer />
                    {t("pages.services.duration")}:
                  </div>
                  <span>{service.duration} min</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {pageCount > 1 && (
          <Pagination
            pageCount={filteredServices.length}
            handlePageClick={handlePageClick}
            itemsPerPage={servicesPerPage}
          />
        )}
      </div>
    </div>
  );
};

export default Services;
