import OrganizationInfo from "./components/OrganizationInfo";
import ManagerInfo from "./components/ManagerInfo";
import Quiz from "../../Components/InstitutionDetails/Quiz";
import LocationMap from "../../Components/LocationMap/Index";

const OrganizationDetail = ({ orgData, ceoData, isLoading }) => {
  return (
    <div className="organization-detail-page">
      <OrganizationInfo orgData={orgData} />
      <ManagerInfo ceoData={ceoData} />

      {orgData?.organization_questions?.length > 0 && (
        <Quiz quizes={orgData?.organization_questions} isLoading={isLoading} />
      )}
    </div>
  );
};

export default OrganizationDetail;
