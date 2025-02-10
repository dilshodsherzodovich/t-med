import { useTranslation } from "react-i18next";
import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import LiveStreamCard from "./components/LiveStreamCard";
import VisionConnectCard from "./components/VisionConnectCard";
import "./livestream.scss";
import hero2 from "/assets/img/hero2.png";

function LiveStream() {
  const { t } = useTranslation();

  const headingData = {
    title: t("pages.livestream.title"),
  };

  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center "}
        backgroundImage={hero2}
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
