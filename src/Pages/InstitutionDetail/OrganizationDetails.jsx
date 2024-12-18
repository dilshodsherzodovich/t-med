import OrganizationInfo from "./components/OrganizationInfo";
import ManagerInfo from "./components/ManagerInfo";
const OrganizationDetail = () => {
  // Sample data - replace with actual data
  const orgData = {
    name: "Ilmiy-texnik axborot markazi",
    logo: "/logo.png",
    description:
      "2019-yil 11-dekabrda innovatsion rivojlanish vaziri I.Abduraxmonovning buyrug'i bilan Ilmiy-texnik axborot markazi o'z faoliyatini boshladi.",
    address: "Tashkent, Uzbekistan",
    employeeCount: 150,
    establishedYear: 2019,
    images: [
      "/org-image-1.jpg",
      "/org-image-2.jpg",
      "/org-image-3.jpg",
      // Add more image URLs as needed
    ],
  };

  const ceoData = {
    fullName: "Mamasidikov Muxsinjon Mamajonovich",
    position: "Muassasa boshligi",
    photo: "/ceo-photo.jpg",
    biography:
      "Experienced leader with extensive background in technical innovation and organizational management.",
    phone: "47-870",
    email: "nvs26@mail.ru",
    receptionDays: "Seshanba soat 14-00 dan 16-00 gacha",
  };

  return (
    <div className="organization-detail-page">
      <OrganizationInfo orgData={orgData} />
      <ManagerInfo ceoData={ceoData} />
    </div>
  );
};

export default OrganizationDetail;
