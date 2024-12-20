import OrganizationInfo from "./components/OrganizationInfo";
import ManagerInfo from "./components/ManagerInfo";

const OrganizationDetail = ({ orgData, ceoData }) => {
  return (
    <div className="organization-detail-page">
      <OrganizationInfo orgData={orgData} />
      <ManagerInfo ceoData={ceoData} />
      {orgData?.organization_questions?.length > 0 && (
        <Quiz quizes={data?.organization_questions} isLoading={isLoading} />
      )}
    </div>
  );
};

export default OrganizationDetail;
