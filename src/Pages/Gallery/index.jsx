import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import ImagesGallery from "./components/ImagesGallery";
import hero2 from "/assets/img/hero2.png";

function Gallery() {
  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage={hero2}
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
