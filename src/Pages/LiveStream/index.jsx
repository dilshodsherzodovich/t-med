import { useTranslation } from "react-i18next";
import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import LiveStreamCard from "./components/LiveStreamCard";
import VisionConnectCard from "./components/VisionConnectCard";
import "./livestream.scss";

function LiveStream() {
  const { t } = useTranslation();

  const headingData = {
    title: t("pages.livestream.title"),
  };

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center "}
        backgroundImage="/assets/img/hero/hero-1.png"
        backgroundPosition="center center"
      >
        <PageHeading
          secondaryData={t("pages.livestream.title")}
          data={headingData}
        />
      </Section>
      <div className="livestream bg-light ">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <VisionConnectCard />
            </div>
            <div className="col-md-6">
              <LiveStreamCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveStream;
