import { useEffect } from "react";
import { motion } from "framer-motion";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { useTranslation } from "react-i18next";
import { FiPhone, FiMail, FiClock, FiMapPin } from "react-icons/fi";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

const customMarkerIcon = new L.divIcon({
  html: `<div style="color: #ef4444; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.3)); display: flex; flex-direction: column; align-items: center; justify-content: center; width: 40px; height: 40px;">
           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
         </div>`,
  className: "custom-div-icon",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const ContactSection2 = () => {
  const { t } = useTranslation();
  const mapPosition = [41.303287, 69.276314];

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="cs_contact_light_section">
      <div className="cs_height_110 cs_height_lg_70" />
      <div className="container">
        <div className="row cs_gap_y_40">
          {/* Left Column — Contact Info */}
          <motion.div
            className="col-lg-6"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="p-5 d-flex flex-column justify-content-center h-100" style={{ backgroundColor: '#0f172a', borderRadius: '24px', minHeight: '450px' }}>
              <h2 className="mb-5" style={{ fontWeight: '800', fontSize: '28px', textTransform: 'uppercase' }}>
                <span style={{ color: '#1a6ef7', textShadow: '0 0 20px rgba(26, 110, 247, 0.4)' }}>BOG'LANISH </span>
                <span style={{ color: '#ffffff' }}>UCHUN</span>
              </h2>
              
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-start">
                  <div className="d-flex align-items-center justify-content-center rounded" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(255,255,255,0.05)', color: '#1a6ef7', marginRight: '20px', flexShrink: 0 }}>
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <div style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', marginBottom: '6px' }}>TELEFON</div>
                    <div style={{ color: '#ffffff', fontSize: '15px', fontWeight: '500' }}>+99871 237 87 71</div>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div className="d-flex align-items-center justify-content-center rounded" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(255,255,255,0.05)', color: '#1a6ef7', marginRight: '20px', flexShrink: 0 }}>
                    <FiMail size={20} />
                  </div>
                  <div>
                    <div style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', marginBottom: '6px' }}>ELEKTRON POCHTA</div>
                    <div style={{ color: '#ffffff', fontSize: '15px', fontWeight: '500' }}>jds@uzrailway.uz</div>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div className="d-flex align-items-center justify-content-center rounded" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(255,255,255,0.05)', color: '#1a6ef7', marginRight: '20px', flexShrink: 0 }}>
                    <FiClock size={20} />
                  </div>
                  <div>
                    <div style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', marginBottom: '6px' }}>ISH VAQTI</div>
                    <div style={{ color: '#ffffff', fontSize: '15px', fontWeight: '500' }}>08:00 — 17:00</div>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <div className="d-flex align-items-center justify-content-center rounded" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(255,255,255,0.05)', color: '#1a6ef7', marginRight: '20px', flexShrink: 0 }}>
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <div style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', marginBottom: '6px' }}>MANZIL</div>
                    <div style={{ color: '#ffffff', fontSize: '14px', fontWeight: '500', lineHeight: '1.5', maxWidth: '300px' }}>
                      Toshkent shahar, Taras shevchenko, 7
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Map */}
          <motion.div
            className="col-lg-6"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="position-relative overflow-hidden h-100 shadow-sm" style={{ borderRadius: '24px', minHeight: '450px', zIndex: 0 }}>
              <MapContainer 
                center={mapPosition} 
                zoom={14} 
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://yandex.com/maps">Yandex Maps</a>'
                  url="https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=21.05.21-0-b210520084330&x={x}&y={y}&z={z}&scale=1&lang=ru_RU"
                />
                <Marker position={mapPosition} icon={customMarkerIcon}>
                  <Popup>
                    <strong>Toshkent shahar</strong><br />
                    Taras shevchenko, 7
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

export default ContactSection2;
