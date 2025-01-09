import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./DepartmentStaff.scss";

const StaffCard = ({ full_name, position, email, phone, image }) => {
  return (
    <div className="staff-card">
      <div className="staff-image">
        <img src={image} alt={`${position}`} className="img-fluid" />
      </div>
      <div className="staff-info">
        <h3 className="staff-name">{full_name}</h3>
        <div className="staff-title">{position}</div>
        <div className="staff-contact">
          <a href={`mailto:${email}`} className="staff-email">
            <FaEnvelope size={14} /> {email}
          </a>
          <a href={`tel:${phone}`} className="staff-phone">
            <FaPhone size={14} /> {phone}
          </a>
        </div>
      </div>
    </div>
  );
};

const DepartmentStaff = ({ department_employees }) => {
  // const staffMembers = [
  //   {
  //     name: "Cevin Peter",
  //     title: "City Council President",
  //     email: "president@citygov.com",
  //     phone: "(+91)8002359595",
  //     image:
  //       "https://demo.ovatheme.com/egovt/wp-content/uploads/2020/07/single-1.jpg",
  //   },
  //   {
  //     name: "Carleno Emo",
  //     title: "City Auditor",
  //     email: "auditor@citygov.com",
  //     phone: "(+91)8002359590",
  //     image: "https://demo.ovatheme.com/egovt/wp-content/uploads/2020/07/2.png",
  //   },
  //   {
  //     name: "Robert Peterson",
  //     title: "Health Director",
  //     email: "director@citygov.com",
  //     phone: "(+91)8002359591",
  //     image: "https://demo.ovatheme.com/egovt/wp-content/uploads/2020/07/3.png",
  //   },
  //   {
  //     name: "Donald Trump",
  //     title: "Tax Collector",
  //     email: "collector@citygov.com",
  //     phone: "(+91)8002359593",
  //     image: "https://demo.ovatheme.com/egovt/wp-content/uploads/2020/07/4.png",
  //   },
  // ];

  return (
    <div className="department-staff container py-5">
      <div className="row g-4">
        {department_employees?.map((staff, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3">
            <StaffCard rd {...staff} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentStaff;
