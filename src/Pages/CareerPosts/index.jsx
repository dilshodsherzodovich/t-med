import { useState } from "react";
import { CalendarDays, MapPin, Plane, Music, Briefcase } from "lucide-react";
import Modal from "./components/Modal";
import "./careerPosts.scss";
import Section from "../../Components/Section";
import PageHeading from "../../Components/PageHeading";
import hero2 from "/assets/img/hero2.png";

const showcaseItems = [
  {
    type: "trip",
    title: "Exotic Bali Getaway",
    date: "August 15-22, 2023",
    location: "Bali, Indonesia",
    description:
      "Experience the magic of Bali with its pristine beaches, lush rice terraces, and vibrant culture.",
    image: "https://source.unsplash.com/800x600/?bali",
    icon: Plane,
    detailedInfo: `
      Immerse yourself in the enchanting beauty of Bali, Indonesia's crown jewel. This 8-day adventure will take you through:

      • Ubud's lush rainforests and terraced rice paddies
      • The sacred Monkey Forest and ancient temples
      • Pristine beaches of Nusa Dua and Seminyak
      • Traditional Balinese dance performances
      • Exquisite local cuisine and cooking classes
      • Relaxing spa treatments and yoga sessions

      Accommodation: Luxury villas with private pools
      Included: Daily breakfast, 3 guided tours, airport transfers
      Price: $2,499 per person (based on double occupancy)
    `,
  },
  {
    type: "event",
    title: "Summer Music Festival",
    date: "July 1-3, 2023",
    location: "Central Park, New York",
    description:
      "Join us for three days of non-stop music featuring top artists from around the world.",
    image: "https://source.unsplash.com/800x600/?music,festival",
    icon: Music,
    detailedInfo: `
      Get ready for the ultimate music experience in the heart of New York City! Our Summer Music Festival features:

      • 3 days of live performances across 5 stages
      • Over 50 international and local artists
      • Genres including Pop, Rock, Hip-Hop, Electronic, and more
      • Food village with cuisines from around the world
      • Art installations and interactive experiences
      • VIP packages available with exclusive viewing areas and meet-and-greets

      Headliners: 
      - Day 1: The Weekend Warriors
      - Day 2: Electro Pulse
      - Day 3: Harmony's Echo

      Tickets: 
      - 1-Day Pass: $99
      - 3-Day Pass: $249
      - VIP 3-Day Pass: $599
    `,
  },
  {
    type: "meeting",
    title: "Global Business Summit",
    date: "September 10, 2023",
    location: "Grand Hyatt, Singapore",
    description:
      "Connect with industry leaders and gain insights into the future of global business.",
    image: "https://source.unsplash.com/800x600/?business,conference",
    icon: Briefcase,
    detailedInfo: `
      Join us for a day of inspiration, networking, and cutting-edge insights at the Global Business Summit. This premier event brings together:

      • Keynote speeches from Fortune 500 CEOs
      • Panel discussions on emerging markets and technologies
      • Workshops on digital transformation and sustainable business practices
      • Networking sessions with industry leaders from over 30 countries
      • Exhibition area showcasing innovative products and services

      Key Topics:
      - The Future of Work in a Post-Pandemic World
      - Sustainable Business Models for the 21st Century
      - Artificial Intelligence and Its Impact on Global Industries
      - Navigating Geopolitical Challenges in International Business

      Schedule:
      08:00 - 09:00: Registration and Breakfast
      09:00 - 10:30: Opening Keynote
      10:45 - 12:15: Breakout Sessions (4 tracks)
      12:15 - 13:45: Networking Lunch
      14:00 - 15:30: Panel Discussions
      15:45 - 17:15: Workshops
      17:30 - 19:00: Closing Keynote and Cocktail Reception

      Early Bird Ticket: $799 (until July 31)
      Regular Ticket: $999
      VIP Ticket (includes exclusive dinner): $1,499
    `,
  },
];

function CareerPosts() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
      >
        <PageHeading
          secondaryData={"Uchrashuvlar"}
          data={{ title: "Uchrashuvlar" }}
        />
      </Section>

      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div className="app">
          <header className="header">
            <h1>Discover Amazing Experiences</h1>
            <p>Your gateway to unforgettable trips, events, and meetings</p>
          </header>

          <main className="main container">
            <div className="showcase-grid">
              {showcaseItems.map((item, index) => (
                <div key={index} className="showcase-card">
                  <div className="showcase-card__image-container">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="showcase-card__image"
                    />
                    <div className="showcase-card__type">{item.type}</div>
                  </div>
                  <div className="showcase-card__content">
                    <div className="showcase-card__header">
                      <h2 className="showcase-card__title">{item.title}</h2>
                      <item.icon className="showcase-card__icon" />
                    </div>
                    <div className="showcase-card__details">
                      <div className="showcase-card__detail">
                        <CalendarDays className="showcase-card__detail-icon" />
                        <span>{item.date}</span>
                      </div>
                      <div className="showcase-card__detail">
                        <MapPin className="showcase-card__detail-icon" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <p className="showcase-card__description">
                      {item.description}
                    </p>
                    <button
                      className="showcase-card__button"
                      onClick={() => setSelectedItem(item)}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {selectedItem && (
            <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
          )}
        </div>
      </Section>
    </>
  );
}

export default CareerPosts;
