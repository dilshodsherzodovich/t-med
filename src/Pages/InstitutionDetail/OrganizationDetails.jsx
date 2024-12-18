import OrganizationInfo from "./components/OrganizationInfo";
import ManagerInfo from "./components/ManagerInfo";

const OrganizationDetail = ({ orgData, ceoData }) => {
  // Sample data - replace with actual data

  return (
    <div className="organization-detail-page">
      <OrganizationInfo orgData={orgData} />
      <ManagerInfo ceoData={ceoData} />
    </div>
  );
};

export default OrganizationDetail;
