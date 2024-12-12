import { Carousel } from "react-bootstrap";

const profiles = [
  {
    id: 1,
    name: "Xodjaev Akbar Ahmadjonovich",
    title: "Andijon tajriba-ko'rgazma maydonii direktori",
    phone: "+998 (91) 490-00-47",
    email: "a.xodjaev@mininnovation.uz",
    location: "Andijon viloyati, Marxamat tumani",
    image:
      "https://innovation.gov.uz/media/CACHE/images/staff_images/Yakubov_Abdulaziz/12ed13de2eca29ed9458d2663beeff6e.JPG",
  },
  // Add more profiles as needed
];

const MapSlider = ({ sliders }) => {
  return (
    <div className="profile-carousel">
      <Carousel indicators={false}>
        {sliders?.map((profile) => (
          <Carousel.Item key={profile?.id}>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">{profile?.title}</h2>
              </div>
              <div className="card-body">
                <div className="profile-info">
                  <img
                    src="https://innovation.gov.uz/media/CACHE/images/staff_images/Yakubov_Abdulaziz/12ed13de2eca29ed9458d2663beeff6e.JPG"
                    alt={profile?.director?.fio}
                    className="profile-image"
                  />
                  <div className="profile-details-map">
                    <h3 className="profile-name">{profile?.director?.fio}</h3>
                    <p className="profile-title">
                      {profile?.director?.specialist}
                    </p>
                  </div>
                </div>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="bi bi-telephone"></i>
                    <span>{profile?.director?.reception_number}</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope"></i>
                    <span>{profile?.director?.email}</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>{profile?.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MapSlider;
