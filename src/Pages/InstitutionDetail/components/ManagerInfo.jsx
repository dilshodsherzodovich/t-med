// import "./ManagerInfo.scss";

import { Container } from "react-bootstrap";
import ManagementDetail from "../../../Components/ManagementDetail";

const ManagerInfo = ({ ceoData, address }) => {
  return (
    <Container>
      <ManagementDetail
        isAddress={true}
        address={address}
        director={ceoData}
        imageSize="default"
      />
    </Container>
  );
};

export default ManagerInfo;
