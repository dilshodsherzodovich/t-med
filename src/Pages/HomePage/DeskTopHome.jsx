import React from "react";
import HeroSection from "../../Components/HeroSection";
import Section from "../../Components/Section";
import About from "../../Components/About";
import CounterSection from "../../Components/FunSection/CounterSection";
import Service from "../../Components/Service";
import TeamSection from "../../Components/TeamSection";
import ChooseUs from "../../Components/ChooseUs";
import CtaSection1 from "../../Components/CtaSection.jsx/CtaSection1";
import BlogSection from "../../Components/BlogsSection";
import MapSection from "../../Components/MapSection";
import ContactSection2 from "../../Components/ContactSection/ContactSection2";
import TestimonialSection from "../../Components/TestimonialSection";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function DesktopHome({
  heroData,
  ctaData1,
  aboutData,
  countersData,
  serviceData,
  servicesData,
  doctorsData,
  sectionData,
  blogData,
  testimonialData,
}) {
  return (
    <>
      <Header isTopBar />
      <HeroSection data={heroData} />
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 position-relative"
      >
        <About data={aboutData} />
      </Section>
      <Section className="cs_counter_area cs_gray_bg">
        <CounterSection data={countersData} />
      </Section>
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={"cs_gray_bg"}
      >
        <Service
          cardBg={"cs_gray_bg"}
          data={serviceData}
          services={servicesData}
        />
      </Section>
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        className={"cs_team_section position-relative"}
      >
        <TeamSection
          hr={true}
          variant={"cs_pagination cs_style_2"}
          data={doctorsData}
        />
      </Section>
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg cs_bg_filed"
        backgroundImage="https://medilo-react.vercel.app/assets/img/service_bg_2.jpg"
      >
        <ChooseUs data={sectionData} />
      </Section>
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData1} />
      </Section>
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogSection data={blogData} />
      </Section>
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_blue_bg cs_bg_filed"
        backgroundImage="assets/img/service_bg_3.jpg"
      >
        <MapSection />
      </Section>
      <ContactSection2></ContactSection2>
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_testimonial_area"
        backgroundImage="/assets/img/testomonial_bg_1.png"
      >
        <TestimonialSection data={testimonialData} />
      </Section>
      <Footer />
    </>
  );
}

export default DesktopHome;
