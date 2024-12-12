import SectionHeading from "../SectionHeading";

const History = ({ data }) => {
  return (
    <>
      <div
        className="container mt-4"
        style={{ marginBottom: "5rem" }}
        data-aos="fade-up"
      >
        <SectionHeading
          SectionSubtitle={data?.sectionSubtitle}
          SectionTitle={data?.sectionTitle}
          variant={"text-center"}
        />
        <div className="cs_height_50 cs_height_lg_50" />

        <div
          dangerouslySetInnerHTML={{ __html: data?.description }}
          className="cs_service_subtitle"
        ></div>
      </div>
    </>
  );
};

export default History;
