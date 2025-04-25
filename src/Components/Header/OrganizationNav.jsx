"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiSearch,
  FiPhone,
  FiClock,
  FiMail,
  FiStar,
} from "react-icons/fi";
import "./OrganizationNav.css";

const OrganizationNav = ({ data, isOpen, onClose }) => {
  const [view, setView] = useState("categories");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrganizations, setFilteredOrganizations] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = selectedCategory.category_organization.filter((org) =>
        org.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredOrganizations(filtered);
    }
  }, [searchTerm, selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setFilteredOrganizations(category.category_organization);
    setView("organizations");
  };

  const handleOrganizationClick = (organization) => {
    setSelectedOrganization(organization);
    setView("details");
  };

  const handleBack = () => {
    if (view === "organizations") {
      setView("categories");
      setSelectedCategory(null);
      setSearchTerm("");
    } else if (view === "details") {
      setView("organizations");
      setSelectedOrganization(null);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FiStar key={i} className="star filled" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FiStar key={i} className="star half-filled" />);
      } else {
        stars.push(<FiStar key={i} className="star" />);
      }
    }

    return stars;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="org-nav-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="org-nav-container"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="org-nav-header">
              {view !== "categories" && (
                <button className="back-button" onClick={handleBack}>
                  <FiChevronLeft /> Back
                </button>
              )}
              <h2>
                {view === "categories" && "Organizations"}
                {view === "organizations" && selectedCategory?.name}
                {view === "details" && selectedOrganization?.title}
              </h2>
              <button className="close-button" onClick={onClose}>
                ×
              </button>
            </div>

            {view === "categories" && (
              <div className="categories-container">
                {data?.map((category) => (
                  <div
                    key={category.id}
                    className="category-card"
                    onClick={() => handleCategoryClick(category)}
                  >
                    <h3>{category.name}</h3>
                    <span className="org-count">
                      {category.category_organization.length} organizations
                    </span>
                  </div>
                ))}
              </div>
            )}

            {view === "organizations" && (
              <div className="organizations-container">
                <div className="search-container">
                  <FiSearch className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search organizations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>

                {filteredOrganizations.length > 0 ? (
                  filteredOrganizations.map((org) => (
                    <div
                      key={org.id}
                      className="organization-card"
                      onClick={() => handleOrganizationClick(org)}
                    >
                      <div className="org-card-content">
                        <h3>{org.title}</h3>
                        <p className="org-address">{org.address}</p>
                        {org.avg_rating > 0 && (
                          <div className="org-rating">
                            {renderStars(org.avg_rating)}
                            <span>{org.avg_rating.toFixed(1)}</span>
                          </div>
                        )}
                      </div>
                      {org.organization_images &&
                        org.organization_images.length > 0 && (
                          <div className="org-image">
                            <img
                              src={
                                org.organization_images[0].image ||
                                "/placeholder.svg"
                              }
                              alt={org.title}
                            />
                          </div>
                        )}
                    </div>
                  ))
                ) : (
                  <div className="no-results">No organizations found</div>
                )}
              </div>
            )}

            {view === "details" && selectedOrganization && (
              <div className="organization-details">
                {selectedOrganization.organization_images &&
                  selectedOrganization.organization_images.length > 0 && (
                    <div className="org-detail-images">
                      <img
                        src={
                          selectedOrganization.organization_images[0].image ||
                          "/placeholder.svg"
                        }
                        alt={selectedOrganization.title}
                        className="main-image"
                      />
                      <div className="image-thumbnails">
                        {selectedOrganization.organization_images
                          .slice(0, 5)
                          .map((image, index) => (
                            <img
                              key={index}
                              src={image.image || "/placeholder.svg"}
                              alt={`${selectedOrganization.title} ${index + 1}`}
                            />
                          ))}
                      </div>
                    </div>
                  )}

                <h2>{selectedOrganization.title}</h2>
                <p className="org-address">{selectedOrganization.address}</p>

                {selectedOrganization.avg_rating > 0 && (
                  <div className="org-rating detail-rating">
                    {renderStars(selectedOrganization.avg_rating)}
                    <span>{selectedOrganization.avg_rating.toFixed(1)}</span>
                  </div>
                )}

                {selectedOrganization.director && (
                  <div className="director-info">
                    <h3>Director</h3>
                    <div className="director-container">
                      {selectedOrganization.director.image && (
                        <img
                          src={
                            selectedOrganization.director.image ||
                            "/placeholder.svg"
                          }
                          alt={selectedOrganization.director.fio}
                          className="director-image"
                        />
                      )}
                      <div className="director-details">
                        <h4>{selectedOrganization.director.fio}</h4>
                        <p>{selectedOrganization.director.specialist}</p>

                        <div className="contact-info">
                          {selectedOrganization.director.reception_number && (
                            <div className="contact-item">
                              <FiPhone className="contact-icon" />
                              <span>
                                {selectedOrganization.director.reception_number}
                              </span>
                            </div>
                          )}

                          {selectedOrganization.director.reception_days && (
                            <div className="contact-item">
                              <FiClock className="contact-icon" />
                              <span>
                                {selectedOrganization.director.reception_days}
                              </span>
                            </div>
                          )}

                          {selectedOrganization.director.email && (
                            <div className="contact-item">
                              <FiMail className="contact-icon" />
                              <span>{selectedOrganization.director.email}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="org-description">
                  <h3>About</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedOrganization.description,
                    }}
                  />
                </div>

                {selectedOrganization.doctors &&
                  selectedOrganization.doctors.length > 0 && (
                    <div className="doctors-section">
                      <h3>Doctors</h3>
                      <div className="doctors-list">
                        {selectedOrganization.doctors.map((doctor) => (
                          <div key={doctor.id} className="doctor-card">
                            {doctor.image && (
                              <img
                                src={doctor.image || "/placeholder.svg"}
                                alt={doctor.full_name}
                                className="doctor-image"
                              />
                            )}
                            <div className="doctor-info">
                              <h4>{doctor.full_name}</h4>
                              <p>{doctor.position}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrganizationNav;
