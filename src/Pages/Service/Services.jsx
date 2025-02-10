import React from "react";
import {
  Heart,
  Brain,
  Activity,
  Syringe,
  FlaskConical,
  Timer,
  BadgeDollarSign,
  Stethoscope,
} from "lucide-react";
import "./services.scss";
import { useTranslation } from "react-i18next";

const services = [
  {
    id: 1,
    title: "Yurak sinovlari",
    icon: <Heart />,
    category: "Cardiology",
    price: 150.0,
    duration: 45,
  },
  {
    id: 2,
    title: "Nevrologik sinovlar",
    icon: <Brain />,
    category: "Neurology",
    price: 200.0,
    duration: 60,
  },
  {
    id: 3,
    title: "Fizik terapiya",
    icon: <Activity />,
    category: "Therapy",
    price: 100.0,
    duration: 30,
  },
  {
    id: 4,
    title: "Kichik jarrohlik",
    icon: <Syringe />,
    category: "Surgery",
    price: 500.0,
    duration: 120,
  },
  {
    id: 5,
    title: "Qon tahlili",
    icon: <FlaskConical />,
    category: "Diagnostics",
    price: 80.0,
    duration: 15,
  },
];

const categories = [
  { id: "all", label: "Barcha ximatlar", icon: <Stethoscope /> },
  { id: "cardiology", label: "Kardiologiya", icon: <Heart /> },
  { id: "neurology", label: "Nevrologiya", icon: <Brain /> },
  { id: "therapy", label: "Terapiya", icon: <Activity /> },
  { id: "surgery", label: "Jarrohlik", icon: <Syringe /> },
  { id: "diagnostics", label: "Diagnostika", icon: <FlaskConical /> },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = React.useState("all");

  const { t } = useTranslation();

  const filteredServices = services.filter(
    (service) =>
      activeCategory === "all" ||
      service.category.toLowerCase() === activeCategory
  );

  return (
    <div className="services">
      <div className="services-container">
        <nav className="services__nav">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${
                activeCategory === category.id ? "button active" : "button "
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </nav>

        <div className="services__grid">
          {filteredServices.map((service) => (
            <div key={service.id} className="services__card">
              <div className="services__card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <div className="services__card-info">
                <div>
                  <div>
                    <BadgeDollarSign />
                    {t("pages.services.price")}:
                  </div>
                  <span>${service.price.toFixed(2)}</span>
                </div>
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
      </div>
    </div>
  );
};

export default Services;
