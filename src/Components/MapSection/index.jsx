import { useQuery } from "@tanstack/react-query";
import SvgMap from "../SvgMap";
import "./map.scss";
import { useHttp } from "../../hooks/useHttp";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin, FiChevronRight, FiX } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function MapSection() {
  const sendRequest = useHttp();
  const { t } = useTranslation();
  const { lang } = useParams();
  const [activeRegion, setActiveRegion] = useState(null);

  const { data: organizationRegions, isSuccess } = useQuery({
    queryKey: ["organizations-regions"],
    queryFn: () => sendRequest({ url: `/reception/organization-by-region//` }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    if (isSuccess) setActiveRegion("Toshkent shahri");
  }, [isSuccess]);

  const activeRegionId = useMemo(() => {
    return organizationRegions?.find((item) => item?.name === activeRegion)?.id;
  }, [activeRegion, organizationRegions]);

  const { data: activeRegionInts, isLoading } = useQuery({
    queryKey: ["activeRegionInts", activeRegionId],
    queryFn: () =>
      sendRequest({
        url: `/reception/organization-by-region//${activeRegionId}/`,
      }),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: activeRegionId !== null && activeRegionId !== undefined,
  });

  const orgs = activeRegionInts?.region_organizations ?? [];

  return (
    <div className="cs_map_section_light">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="cs_section_heading cs_style_1 cs_type_1 mb-2"
        >
          <div className="cs_section_heading_left">
            <p className="cs_section_subtitle cs_accent_color">
              <span className="cs_shape_left" />
              {t("pages.home.svgMap.title")}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="cs_map_fullwrap"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Full-width SVG map */}
          <div className="cs_map_svg_area">
            <SvgMap
              activeRegion={activeRegion}
              setActiveRegion={setActiveRegion}
            />
          </div>

          {/* Floating overlay panel */}
          <AnimatePresence mode="wait">
            {activeRegion && (
              <motion.div
                key={activeRegion}
                className="cs_map_org_panel"
                initial={{ opacity: 0, x: 20, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="cs_map_org_panel_header">
                  <div>
                    <h4 className="cs_map_org_region">{activeRegion}</h4>
                    <span className="cs_map_org_count">
                      {orgs.length} ta tashkilot
                    </span>
                  </div>
                  <button
                    className="cs_map_panel_close"
                    onClick={() => setActiveRegion(null)}
                    aria-label="Yopish"
                  >
                    <FiX />
                  </button>
                </div>

                <div className="cs_map_org_list">
                  {isLoading ? (
                    <div className="cs_map_org_loading">
                      <div className="cs_map_org_spinner" />
                    </div>
                  ) : orgs.length === 0 ? (
                    <p className="cs_map_org_empty">
                      Bu viloyatda tashkilotlar topilmadi
                    </p>
                  ) : (
                    orgs.map((org) => (
                      <div key={org.id} className="cs_map_org_card">
                        <h5 className="cs_map_org_title">{org.title}</h5>
                        {org.address && (
                          <div className="cs_map_org_row">
                            <FiMapPin />
                            <span>{org.address}</span>
                          </div>
                        )}
                        {org.director?.reception_number && (
                          <div className="cs_map_org_row">
                            <FiPhone />
                            <span>{org.director.reception_number}</span>
                          </div>
                        )}
                        {org.director?.email && (
                          <div className="cs_map_org_row">
                            <FiMail />
                            <span>{org.director.email}</span>
                          </div>
                        )}
                        <Link
                          to={`/${lang}/muassasalar/${org.slug}`}
                          className="cs_map_org_link"
                        >
                          Batafsil <FiChevronRight />
                        </Link>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default MapSection;
