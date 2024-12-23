// import "./ManagerInfo.scss";

import { Container } from "react-bootstrap";
import ManagementDetail from "../../../Components/ManagementDetail";

const ManagerInfo = ({ ceoData }) => {
  return (
    <Container>
      <ManagementDetail director={ceoData} imageSize="default" />
    </Container>
  );
};

export default ManagerInfo;
