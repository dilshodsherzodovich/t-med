import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import ImagesGallery from "./components/ImagesGallery";

function Gallery() {
  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="/assets/img/hero/hero-1.png"
        backgroundPosition="center center"
      >
        <PageHeading secondaryData="Galereya" data={{ title: "Galereya" }} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <ImagesGallery />
      </Section>
    </>
  );
}

export default Gallery;
