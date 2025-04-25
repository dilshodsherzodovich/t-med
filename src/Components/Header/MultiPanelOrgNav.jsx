"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronRight,
  FiX,
  FiMapPin,
  FiPhone,
  FiMail,
  FiGlobe,
  FiStar,
  FiUser,
  FiClock,
} from "react-icons/fi";
import "./MultiPanelOrgNav.scss";
import { useParams } from "react-router-dom";
import YandexMap from "./YandexMaps";

const MultiPanelOrgNav = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrganizations, setFilteredOrganizations] = useState([]);
  const [activeImage, setActiveImage] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const navRef = useRef(null);

  const { lang } = useParams();

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Close navigation when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.closest(".org-nav-trigger")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter organizations when search term or selected category changes
  useEffect(() => {
    if (selectedCategory) {
      const filtered = selectedCategory.category_organization.filter((org) =>
        org.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOrganizations(filtered);
    }
  }, [searchTerm, selectedCategory]);

  // Set active image when organization is selected
  useEffect(() => {
    if (
      selectedOrganization &&
      selectedOrganization.organization_images &&
      selectedOrganization.organization_images.length > 0
    ) {
      setActiveImage(selectedOrganization.organization_images[0].image);
    }
  }, [selectedOrganization]);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
    setSelectedCategory(null);
    setSelectedOrganization(null);
    setSearchTerm("");
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setFilteredOrganizations(category.category_organization);
  };

  const selectOrganization = (org) => {
    setSelectedOrganization(org);
  };

  const goBackToCategories = () => {
    setSelectedCategory(null);
  };

  const goBackToOrganizations = () => {
    setSelectedOrganization(null);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FiStar key={i} className="star filled" />);
      } else {
        stars.push(<FiStar key={i} className="star" />);
      }
    }

    return stars;
  };

  return (
    <>
      {/* Trigger button */}
      <button className="org-nav-trigger" onClick={openNav}>
        <span>Tashkilotlar</span>
        <FiChevronRight />
      </button>

      {/* Multi-panel navigation */}
      <div className={`multi-panel-nav ${isOpen ? "open" : ""}`} ref={navRef}>
        {/* Overlay */}
        {isOpen && <div className="nav-overlay" onClick={closeNav}></div>}

        {/* Panels container */}
        <div className="panels-container">
          {/* Categories panel */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="panel categories-panel"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="panel-header">
                  <h2>Kategoriyalar</h2>
                  <button className="close-btn" onClick={closeNav}>
                    <FiX />
                  </button>
                </div>
                <div className="panel-content">
                  <ul className="categories-list">
                    {data.map((category) => (
                      <li
                        key={category.id}
                        className={
                          selectedCategory?.id === category.id ? "active" : ""
                        }
                        onClick={() => selectCategory(category)}
                      >
                        <div className="category-item">
                          <span className="category-name">{category.name}</span>
                          <span className="category-count">
                            {category.category_organization.length}
                          </span>
                          <FiChevronRight className="chevron-icon" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Organizations panel */}
          <AnimatePresence>
            {isOpen && selectedCategory && (
              <motion.div
                className="panel organizations-panel"
                initial={{ x: isMobileView ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: isMobileView ? "100%" : "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="panel-header">
                  {isMobileView && (
                    <button className="back-btn" onClick={goBackToCategories}>
                      <FiChevronRight className="back-icon" />
                    </button>
                  )}
                  <h2>{selectedCategory.name}</h2>
                  {!isMobileView && (
                    <button className="close-btn" onClick={closeNav}>
                      <FiX />
                    </button>
                  )}
                </div>
                <div className="panel-content">
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Search organizations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <ul className="organizations-list">
                    {filteredOrganizations.map((org) => (
                      <li
                        key={org.id}
                        className={
                          selectedOrganization?.id === org.id ? "active" : ""
                        }
                        onClick={() => selectOrganization(org)}
                      >
                        <div className="org-item">
                          <div className="org-info">
                            <h3 className="org-title">{org.title}</h3>
                            <p className="org-address">
                              <FiMapPin className="icon" /> {org.address}
                            </p>
                            {org.avg_rating >= 0 && (
                              <div className="org-rating">
                                {renderStars(org.avg_rating)}
                                <span>{org.avg_rating.toFixed(1)}</span>
                              </div>
                            )}
                          </div>
                          {org.organization_images &&
                            org.organization_images.length > 0 && (
                              <div className="org-thumbnail">
                                <img
                                  src={
                                    org.organization_images[0].image ||
                                    "/placeholder.svg"
                                  }
                                  alt={org.title}
                                />
                              </div>
                            )}
                          <FiChevronRight className="chevron-icon" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Organization details panel */}
          <AnimatePresence>
            {isOpen && selectedOrganization && (
              <motion.div
                className="panel details-panel"
                initial={{ x: isMobileView ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: isMobileView ? "100%" : "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <div className="panel-header">
                  {isMobileView && (
                    <button
                      className="back-btn"
                      onClick={goBackToOrganizations}
                    >
                      <FiChevronRight className="back-icon" />
                    </button>
                  )}
                  <h2>{selectedOrganization.title}</h2>
                  {!isMobileView && (
                    <button className="close-btn" onClick={closeNav}>
                      <FiX />
                    </button>
                  )}
                </div>
                <div className="panel-content">
                  {/* Gallery */}
                  {selectedOrganization.organization_images &&
                    selectedOrganization.organization_images.length > 0 && (
                      <div className="org-gallery">
                        <div className="main-image-container">
                          <img
                            src={
                              activeImage ||
                              selectedOrganization.organization_images[0].image
                            }
                            alt={selectedOrganization.title}
                            className="main-image"
                          />
                        </div>
                        <div className="thumbnails">
                          {selectedOrganization.organization_images.map(
                            (image, index) => (
                              <div
                                key={index}
                                className={`thumbnail ${
                                  activeImage === image.image ? "active" : ""
                                }`}
                                onClick={() => setActiveImage(image.image)}
                              >
                                <img
                                  src={image.image || "/placeholder.svg"}
                                  alt={`${selectedOrganization.title} ${
                                    index + 1
                                  }`}
                                />
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                  {/* Organization info */}
                  <div className="org-details">
                    <div className="org-location">
                      <FiMapPin className="icon" />
                      <p>{selectedOrganization.address}</p>
                    </div>

                    {selectedOrganization.avg_rating >= 0 && (
                      <div className="org-rating detail-rating">
                        {renderStars(selectedOrganization.avg_rating)}
                        <span>
                          {selectedOrganization.avg_rating.toFixed(1)}
                        </span>
                      </div>
                    )}

                    {/* Contact info table */}
                    <div className="info-table">
                      <table>
                        <tbody>
                          {selectedOrganization.director && (
                            <tr>
                              <td>Rahbari</td>
                              <td>
                                <FiUser className="icon" />
                                {selectedOrganization.director.fio}
                              </td>
                            </tr>
                          )}
                          {selectedOrganization.director &&
                            selectedOrganization.director.reception_number && (
                              <tr>
                                <td>Telefon raqam</td>
                                <td>
                                  <FiPhone className="icon" />
                                  <a
                                    href={`tel:${selectedOrganization.director.reception_number}`}
                                  >
                                    {
                                      selectedOrganization.director
                                        .reception_number
                                    }
                                  </a>
                                </td>
                              </tr>
                            )}
                          {selectedOrganization.director &&
                            selectedOrganization.director.reception_days && (
                              <tr>
                                <td>Email</td>
                                <td>
                                  <FiMail className="icon" />
                                  <a
                                    href={`mailto:${selectedOrganization.director.email}`}
                                  >
                                    {selectedOrganization.director.email}
                                  </a>
                                </td>
                              </tr>
                            )}
                          {selectedOrganization.director &&
                            selectedOrganization.director.email && (
                              <tr>
                                <td>Qabul kunlari</td>
                                <td>
                                  <FiClock className="icon" />
                                  <a>
                                    {
                                      selectedOrganization.director
                                        .reception_days
                                    }
                                  </a>
                                </td>
                              </tr>
                            )}
                          <tr>
                            <td>Vebsayt</td>
                            <td>
                              <FiGlobe className="icon" />
                              <a
                                href={`/${lang}/muassasalar/${selectedOrganization?.slug}`}
                                target="_blank"
                                rel=""
                              >
                                {selectedOrganization?.slug}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Map placeholder */}
                    {selectedOrganization?.latitude && (
                      <div className="map-container">
                        <h3>Manzil</h3>
                        <div className="map-placeholder">
                          <YandexMap
                            location={{
                              lat: selectedOrganization?.longitude,
                              lng: selectedOrganization?.latitude,
                            }}
                            title={selectedOrganization?.title}
                            address={selectedOrganization?.address}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default MultiPanelOrgNav;
