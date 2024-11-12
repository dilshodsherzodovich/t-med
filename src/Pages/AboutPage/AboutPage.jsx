import History from "../../Components/About/History";
import CtaSection1 from "../../Components/CtaSection.jsx/CtaSection1";
import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import TeamSection from "../../Components/TeamSection";

const headingData = {
  title: "Biz haqimizda",
};

const teamData = {
  subtitle: "Bizning jamoa",
  title: " Bizning malakali shifokorlarimiz <br/> bilan tanishing",
  sliderData: [
    {
      name: "Nargiza Alimuhammedova",
      profession: "Nevrolog",
      imageUrl: "https://medilo-react.vercel.app/assets/img/team_5.jpg",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
    {
      name: "G'afurjonov Dilshod",
      profession: "Tish shifokori",
      imageUrl: "https://medilo-react.vercel.app/assets/img/team_1.jpg",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
    {
      name: "G'afurjonova Hilola",
      profession: "Tish shifokori",
      imageUrl: "https://medilo-react.vercel.app/assets/img/team_5.jpg",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
    {
      name: "Hayitaliyev Yorqin",
      profession: "Jarroh",
      imageUrl: "https://medilo-react.vercel.app/assets/img/team_3.jpg",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
    {
      name: "Nasrullayev Dilshod",
      profession: "Urolog",
      imageUrl: "https://medilo-react.vercel.app/assets/img/team_1.jpg",
      link: "/doctors/doctor-details",
      facebook: "/",
      pinterest: "/",
      twitter: "/",
      instagram: "/",
    },
  ],
};

const historyData = {
  sectionSubtitle: "Bizning tarixmiz",
  sectionTitle: `"O'zbekiston temir yo'llari" AJ Sog'liqni saqlash xizmati tarixi`,
  aboutDetails: [
    `1899 yilda Kaspiy orti va Markaziy Osiyo yo'llari bir-biriga Markaziy Osiyo nomi bilan qo'shilib, uning tarkibida mavjud tibbiyot muassasalarini boshqarish va yo'l qurilishini nazorat qilish funktsiyalari mavjud bo'lgan tibbiy qism tashkil etildi. 
Shu vaqtga kelib, tibbiyot muassasalari paramedik-akusherlik punktlari (PAP), paramedik punktlar, tibbiy joylar, shuningdek, Buxoro stantsiyasida 10 o'ringa mo'ljallangan shifoxona tashkil etilgan.`,
    ` Ushbu bosqichda yangi qurilayotgan yo'l uchastkalarida ambulator yordamning birlamchi bo'g'inini tashkil etish davom ettirildi, malakali ambulatoriya yordami yaratildi, yangi yordam rejimlari joriy etildi (otolaringologiya, jarrohlik, nevrologik, laboratoriya). Toshkent, Ashxobod, Qarshi, Charjou, Krasnovodsk, Samarqand, Chernyayevo, Kizilarvat stantsiyalarida shifoxona bo'limlari dastlab umumiy, so'ngra maxsus (terapiya, jarrohlik, infeksiya, tug'ruqxona) tashkil etildi. 1918-yilda 185 ta koyka, 1940-yilda 1306 ta, 1950-yilda 1890 ta, 1968-yilga kelib esa 3000 dan ziyod koykalar qo'yib bo'lingan edi.`,
    ` 1929 yilda poliklinika, sog'liqni saqlash markazlari qayta tashkil etildi. Poliklinikalarda yuqori sifatli profilaktika tekshiruvlarini ta'minlaydigan tor mutaxassisliklar shifokorlarining shtatdagi lavozimi joriy etildi.
1959 yildan boshlab shtatlar ajratildi, bolalar maslahatxonalari bolalar poliklinikalariga isloh qilindi, bolalar statsionar bo'limlari tashkil etildi. Ular bolalarni tibbiy ko'rikdan o'tkazish va yaxshilashni ta'minladilar.
1970 yilga kelib asosiy kuchni ishga tushirib, tibbiyot muassasalari ham tibbiy yordam, ham shifokorlar mehnati sharoitida yaxshilanishni davom ettirdi. 1979-1980 yillarda barcha muassasalar eski yoki namunaviy yangi binolar (Samarqand, Urganch, Xo'jayli, Andijon, Qarshi, Qo'ng'irot) obodonlashtirildi.`,
    ` Nazarbek qishlog'ida shifoxona va Havotog' stansiyasida iqlim shifoxonasi qurilgan. Tish klinikasi va teri-venerologiya dispanseri yaratildi.
1980-yillarning oxiriga kelib, 12 ta profildan 3330 ta statsionar yotoq va 19 ta profilda bir smenada 6900 ta tashrif buyuradigan poliklinika (bo'lim) mavjud edi.

         Tibbiy yordamni liniyada yashovchi temiryo'lchilarga yaqinlashtirish maqsadida "Salomatlik" tibbiy-sanitariya yordami poyezdi tashkil etilib, unda shifokorlar xonalari, protseduralar, registrlar va diagnostika xonalari, flyurograf vagonlari, xodimlar uchun yotoqxona vagonlari mavjud bo'lgan ikkita ambulatoriya vagonlari mavjud.
        "Salomatlik" poyezdida tibbiyot xodimlarining kichik stansiyalarda ishlashi, Markaziy tuman shifoxonalaridan uzoqda joylashgan joylarda istiqomat qiluvchi temiryo'lchilarni tibbiy ko'rikdan o'tkazish uchun barcha sharoitlar yaratilgan.`,
    ,
    `Kompaniyaning tibbiy-sanitariya xizmati boshliqlarining nomlari: Briganin, Dmitriyevskiy, Sarkisov, I. Umarov, Martirosyan, A. Alimov, A. Akbarov, Sh.Eshonxajayev, A. M. Miragzamov. Ularning har birlari temir yo'l ishchi xodimlari sog'lig'ini yaxshilashga o'z hissalarini qo'shdilar.`,
  ],
};

const ctaData = {
  videoLink: "https://www.youtube.com/embed/rRid6GCJtgc",
  videoButtonText: "Videoni tomosha qiling",
  subtitle: "VIDEO",
  title: "Professional tibbiy yordam",
  description:
    "Biz dunyoning etakchi apparat, dasturiy ta'minot va brendlaridan bo'lgan yuzlab kelajakka yo'naltirilgan tibbiyot mutaxassislari bilan ishlash imkoniyatiga egamiz.",
  buttonLink: "/contact",
  buttonText: "Bog'lanish",
  brandImage: "assets/img/medical_brand.png",
};

const AboutPage = () => {
  return (
    <div className="about-page-area">
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>
      {/* Start About Section */}
      <History data={historyData} />
      {/* End About Section */}

      {/* Start Counter Section */}

      {/* <Section
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_counter_area_2"
      >
        <CounterSection2 data={counterData} />
      </Section> */}

      {/* End Counter Section */}

      {/* Start CTA Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={"cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"}
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData} />
      </Section>
      {/* End CTA Section */}

      {/* Start Team Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="0"
      >
        <TeamSection
          hr={true}
          variant={"cs_pagination cs_style_2"}
          data={teamData}
        />
      </Section>
      {/* End Team Section */}
    </div>
  );
};

export default AboutPage;
