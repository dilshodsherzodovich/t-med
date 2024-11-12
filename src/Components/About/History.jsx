import SectionHeading from "../SectionHeading";

const History = ({ data }) => {
  return (
    <>
      <div className="container mt-4" style={{ marginBottom: "5rem" }}>
        <SectionHeading
          SectionSubtitle={data.sectionSubtitle}
          SectionTitle={data.sectionTitle}
          variant={"text-center"}
        />
        <div className="cs_height_50 cs_height_lg_50" />

        {data.aboutDetails.map((detail, index) => (
          <p key={index} className="cs_service_subtitle">
            {detail}
          </p>
        ))}
      </div>
    </>
  );
};

export default History;
