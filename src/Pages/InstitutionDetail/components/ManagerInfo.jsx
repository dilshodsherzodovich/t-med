import { Container, Row, Col } from "react-bootstrap";
import ManagementDetail from "../../../Components/ManagementDetail";
import { useTranslation } from "react-i18next";

const ManagerInfo = ({ ceoData, address }) => {
  const { t } = useTranslation();

  if (!ceoData?.image && !ceoData?.fio) return null;

  return (
    <Container className="py-4">
      <h3
        style={{
          color: "#111827",
          fontWeight: 800,
          fontSize: "1.1rem",
          marginBottom: "1.5rem",
          paddingBottom: "0.6rem",
          borderBottom: "2px solid rgba(26,110,247,0.1)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 4,
            height: 20,
            background: "linear-gradient(to bottom, #1a6ef7, #60a5fa)",
            borderRadius: 4,
            flexShrink: 0,
          }}
        />
        {t("pages.singleDepartment.head")}
      </h3>

      <Row className="justify-content-center">
        <Col xs={12} sm={9} md={7} lg={5} xl={4}>
          <ManagementDetail
            isAddress={!!address}
            address={address}
            director={ceoData}
            index={0}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ManagerInfo;
