import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import BlogsLeft from "./BlogsDetailsSide/BlogsLeft";
import BlogsRight from "./BlogsDetailsSide/BlogsRight";

const headingData = {
  title: "Tibbiyot xodimlari kuni",
};

const leftSideData = {
  imageSrc:
    "http://api.nsu-railway.uz/media/contents/photos/main/5294395942738453394.jpg",
  imageAlt: "Post Image",
  text: "Admin",
  secText: "11-Noyabr, 2024",
  thirdSecTitle: "Xabarni jo'natish",

  content: [
    `Siz, aziz hamkasblarimni “Temir
    yo‘l ijtimoiy xizmatlar” muassasasi rahbariyati nomidan kasb bayramingiz - Tibbiyot xodimlari kuni munosabati bilan samimiy tabriklayman.`,
    `Sizlar dunyodagi eng ulug' kasb egalari sifatida inson salomatligi yo'lidagi g‘oyat mas'uliyatli va sharafli faoliyatingiz bilan xalqimiz mehriga sazovor bo‘lib kelmoqdasiz.`,
    `
    Bugungi kunda temir yo‘l tibbiyot sohasida olib borilayotgan islohotlar - tibbiy xizmatning sifatini oshirish, sohaga innovatsiyalar hamda eng so‘nggi yangiliklarni joriy etishdek muhim va dolzarb ishlar Sizlarning zimmangizga ham katta masʼuliyat yuklaydi.`,
  ],

  commentTitle: "Comments (3)",
  comments: [
    {
      avatarSrc: "/assets/img/avatar_2.png",
      avatarAlt: "Image",
      name: "Dr. Barat Mara",
      text: "Lorem ipsum is simply free textdolor sit amet, consectetur notted adipisicing elit sed do iusmod tempor incididu.",
      date: "June 14, 2023",
      time: "12:00 AM",
      replay: "Reply",
      link: "/",
    },
    {
      avatarSrc: "/assets/img/avatar_3.png",
      avatarAlt: "Image",
      name: "Dr. Morat Kara",
      text: "Lorem ipsum is simply free textdolor sit amet, consectetur notted adipisicing elit sed do iusmod tempor incididu.",
      date: "June 14, 2023",
      time: "12:00 AM",
      replay: "Reply",
      link: "/",
    },
  ],

  serviceOption: [
    { value: "choose-service", label: "Choose Service" },
    { value: "crutches", label: "Crutches" },
    { value: "x-Ray", label: "X-Ray" },
    { value: "pulmonary", label: "Pulmonary" },
    { value: "cardiology", label: "Cardiology" },
    { value: "dental-care", label: "Dental Care" },
    { value: "neurology", label: "Neurology" },
  ],
};

const rightSideData = {
  searchPlaceholder: "Qidiruv....",
  secTitle: "Kategoriyalar",
  service: {
    backgroundImage: "/assets/img/suegery_overlay.jpg",
    icon: "/assets/img/icons/service_icon_19.png",
    title: "Heart Surgery",
    subtitle: "Medical competitor research startup to financial",
    link: "/service/service-details",
  },
  recentPosts: [
    {
      imgSrc:
        "http://api.nsu-railway.uz/media/contents/photos/main/5260357476514128354_1.jpg",
      date: "11-Noyabr, 2024",
      title: "Kasb fidoyisi",
      link: "/blog/blog-details",
    },
    {
      imgSrc:
        "http://api.nsu-railway.uz/media/contents/photos/main/5291775295428354997.jpg",
      date: "11-Noyabr, 2024",
      title: "Kasb fidoyisi",
      link: "/blog/blog-details",
    },
    {
      imgSrc:
        "http://api.nsu-railway.uz/media/contents/photos/main/5260357476514128354_1.jpg",
      date: "11-Noyabr, 2024",
      title: "Kasb fidoyisi",
      link: "/blog/blog-details",
    },
  ],
  categories: [
    { name: "Tibbiy 08", link: "#" },
    { name: "Laborotoriya 14", link: "#" },
    { name: "Kasbiy 12", link: "#" },
    { name: "Texnologik 23", link: "#" },
    { name: "Ijtimoiy 17", link: "#" },
    { name: "Dorixona 22", link: "#" },
  ],
};

const BlogsDetails = () => {
  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <>
        {/* Start Blog Details Section */}

        <Section
          topSpaceLg="80"
          topSpaceMd="120"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
        >
          <div className="container">
            <div className="row">
              <BlogsLeft data={leftSideData} />

              <BlogsRight data={rightSideData} />
            </div>
          </div>
        </Section>

        {/* End Blog Details Section */}
      </>
    </>
  );
};

export default BlogsDetails;
