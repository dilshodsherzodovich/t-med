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

const MapSlider = () => {
  return (
    <div className="profile-carousel">
      <Carousel indicators={false}>
        {profiles.map((profile) => (
          <Carousel.Item key={profile.id}>
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">
                  {`Andijon tajriba-ko'rgazma maydoni`}
                </h2>
              </div>
              <div className="card-body">
                <div className="profile-info">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="profile-image"
                  />
                  <div className="profile-details-map">
                    <h3 className="profile-name">{profile.name}</h3>
                    <p className="profile-title">{profile.title}</p>
                  </div>
                </div>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="bi bi-telephone"></i>
                    <span>{profile.phone}</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope"></i>
                    <span>{profile.email}</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>{profile.location}</span>
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
