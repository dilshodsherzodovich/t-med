import OrganizationInfo from "./components/OrganizationInfo";
import ManagerInfo from "./components/ManagerInfo";

const OrganizationDetail = ({ orgData, ceoData }) => {
  return (
    <div className="organization-detail-page">
      <OrganizationInfo orgData={orgData} />
      <ManagerInfo ceoData={ceoData} />
    </div>
  );
};

export default OrganizationDetail;
