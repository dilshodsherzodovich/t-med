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
    `Oʼzbekiston Respublikasi Prezidentining 2023 yil 10 oktyabrdagi “Oʼzbekiston Respublikasi temir yoʼl transporti sohasini tubdan isloh qilish chora-tadbirlari toʼgʼrisida”gi PQ-329 qarori asosida “Oʼzbekiston temir yoʼllari” aktsiyadorlik jamiyati va uning tarkibidagi korxonalar negizida 2024 yil yanvardan alohida yoʼnalishlar boʼyicha jamiyatlar tashkil etildi. 
“Oʼzbekiston temir yoʼllari” aktsiyadorlik jamiyati boshqaruvi raisining 2023 yil 24 noyabrdagi 954-sonli buyrugʼiga muvofiq “Temir yoʼl ijtimoiy xizmatlar” muassasasi tashkil etildi.
“Temir yoʼl ijtimoiy xizmatlar” muassasasi tashkil etilgach, barcha davolash profilaktika muassasalari, Sanitariya­-epidemiologiya stantsiyalari, sanatoriya muassasalari, “Qibray”, “Yangi avlod”, “Burchimullo”, “Temiryoʼlchi”, “Аlovuddin” bolalar dam olish oromgohlari, “Rina med” ochiq aktsiyadorlik jamiyati sport klubi hamda Temiryoʼlchilar madaniyat saroyi “Temir yoʼl ijtimoiy xizmatlar” muassasasi tarkibiy tuzilmasi tarkibida faoliyat koʼrsata boshladi. 
Аyni paytda muassasa tarkibidagi barcha yoʼnalishlarda jami toʼrt mingdan ortiq oʼz kasbining mohir mutaxassislari, ishchi-xodimlar faoliyat koʼrsatmoqda. 
Muassasa tarkibidagi asosiy va eng muhim yoʼnalishlarga 12 ta temir yoʼl birlashgan shifoxonasi hamda Markaziy poliklinika, “Salomatlik” tibbiy sanitar yordam poezdi kiradi. Bugungi kunda ushbu soha mutaxassislari temiryoʼlchilarga va aholiga sifatli tibbiy xizmat koʼrsatmoqda. Toshkent va viloyat markazlaridagi temir yoʼl shifoxona hamda poliklinikalari respublikamiz aholisi orasida eng ishonchli tibbiyot muassasalaridan biri sanaladi. Sohada zamonaviy tibbiyot yangiliklarini joriy qilish uchun malakali xodimlarni respublikamizdagi nufuzli ixtisoslashtirilgan ilmiy-amaliy tibbiyot markazlari hamda chet davlatlaridagi tibbiyot markazlarida malakasini oshirishga katta eʼtibor qaratish koʼzda tutilmoqda. 
Sanitariya-gigiena va epidemiyaga qarshi chora-tadbirlar rejasiga asosan temiryoʼlchilarning sanitariya-epidemiologik osoyishtaligini taʼminlash, ularning salomatligini mustahkamlash va mehnat sharoitlarini yaxshilash maqsadida mehnat qilish, sanitariya-maishiy va ovqatlanish sharoitlari ustidan sanitariya nazoratini amalga oshirish ham muhim yoʼnalishlardan biri boʼlib qoladi. 
Muassasa tarkibiga kirgan yoʼnalishlardan yana biri Temiryoʼlchilar madaniyat saroyidir. Ushbu yoʼnalish temiryoʼlchilarning oila aʼzolari va aholining maʼnaviy-maʼrifiy extiyojlarini qondiruvchi, ijodiy qobiliyatlarini rivojlantiruvchi, mazmunli va maroqli dam olishga koʼmak beruvchi ijtimoiy-madaniy markazdir. Bu yerda musiqa, raqs, teatr, estrada jamoalari, ansambllar, tasviriy sanʼat va musiqa yozish studiyalari hamda xalq ijodiyoti jamoalari tashkil etilgan. Shuningdek, temiryoʼlchi va aholi farzandlari uchun turli raqs, gimnastika va boshqa pullik toʼgaraklar ham faoliyat koʼrsatadi. 
Sanatoriya-kurort muassasalari tarkibiga “Qoʼngʼirot” va “Sihatgoh” profilaktoriyasi kirib, temiryoʼlchilar barcha sharoitlarga ega boʼlgan ushbu maskanlarda dam oladilar va sogʼlomlashtiriladilar.
Temir yoʼl tizimidagi bolalar sogʼlomlashtirish oromgohlari respublikamizning eng hushmanzara, tabiati goʼzal hududlarda joylashgan. Аyniqsa, togʼlar bagʼrida, soʼlim goʼshalarda joylashgan oromgohlarda yoz mavsumida soha ishchilarining minglab farzandlari mavsumlar davomida maroqli dam olishadi. Bolalarning jismoniy, maʼnaviy va axloqiy kamol topishiga hamda ularni tarixiy va milliy anʼanalar bilan tanishtirib, ularda umuminsoniy va milliy qadriyatlarni shakllantirishga koʼmaklashiladi. Yoz mavsumida mazkur dam olish maskanlarida 7 yoshdan 14 yoshgacha boʼlgan oʼgʼil-qizlarimiz boʼsh vaqtlarini mazmunli oʼtkazib, intellektual rivojlangan salohiyatli yoshlar boʼlib yetishadilar.
Poyxatimizdagi “Rina med” masʼuliyati cheklangan jamiyati jismoniy sport klubi ham “Temir yoʼl ijtimoiy xizmatlar” muassasasi tarkibiga kiritilib, bu yerda temiryoʼlchilar va ularning farzandlarini sogʼlomlashtirish maqsadida turli sport mashgʼulotlari, tadbirlar hamda musobaqalar tashkil etilishi yoʼlga qoʼyilgan.
Manzil, Toshkent shahar.Mirobod tumani
Salar MFY. Nukus. Pr. 1 koʼchasi 5-uy.`,
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
