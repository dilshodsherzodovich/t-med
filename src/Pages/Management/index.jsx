import React from "react";
import PageHeading from "../../Components/PageHeading";
import { FaPhone, FaReceipt } from "react-icons/fa6";
import Section from "../../Components/Section";
import ManagementDetail from "../../Components/ManagementDetail";
import { IoIosMail } from "react-icons/io";

const headingData = {
  title: "Rahbariyat",
};

const doctors = [
  {
    name: "MAMASIDIKOV MUXSINJON MUSAJONOVICH",
    subtitle: "Temir yo'l ijtimoiy xizmatlar muassasasi boshlig'i",
    descriptionLabel: "Tarjimai hol",
    description: [
      `Mamasidikov Muxsinjon Mamajonovich 17.02.1976 yilda Farg‘ona vioyati Rishton tumanida tavallud topgan. Temir yo‘l soxasida 1994-yildan hozirgi vaqtgacha bir qator rahbarlik lavozimlarda ishlab kelmoqdalar. 2020-2023-yillarda “Sog‘liqni saqlash xizmati” boshlig‘i  lavozimida ishlaganlar. 2023-yildan hozirgi kunga qadar “Temir yo’l ijtimoiy xizmatlar” muassasasi boshlig‘I lavozimida faoliyat olib bormoqdalar. Kasbga bo‘lgan muxabbatlari va fidokorona mehnatlari uchun Faxriy temiryo‘lchi unvoni hamda “O‘zbekiston Respublikasi Sog‘liqni saqlash a’lochisi” ko‘krak nishoni bilan taqdirlanganlar.`,
    ],
    image: "assets/img/management/MamasiddiqovMuxsinjonMusajonovich.jpg",
    info: [
      {
        icon: <FaPhone width={28} height={28} />,
        subtitle: "Telefon raqam",
        title: "47-870",
        secIcon: <IoIosMail width={28} height={28} />,
        secSubtitle: "Email manzili",
        secTitle: "nvs26@mail.ru",
      },
      {
        icon: <FaReceipt width={28} height={28} />,
        title: "Qabul kunlari",
        subtitle: "Seshanba  soat 14-00 dan 16-00 gacha",
      },
    ],
  },
  {
    name: "Muxtarov Muzaffar Abdumuxitovich",
    subtitle: "Muassasa boshlig‘i birinchi o‘rinbosari",
    descriptionLabel: "Tarjimai hol",
    description: [
      `Muxtarov Muzaffar Abdumuxitovich 18.09.1977 yilda Toshkent shahrida tavallud topgan. 2001-yildan hozirgi vaqtgacha temir yo‘l sohasida bir qator rahbar lavozimlarida ishlab kelmoqdalar. 2023-yildan “Temir yo‘l ijtimoiy xizmarlar” muassasasida muassasa boshlig‘ining birinchi o‘rinbosari lavozimida faoliyat olib bormoqdalar. “Temir yo‘l ijtimoiy xizmatlar” muassasasida fidokorona mehnatlari uchun esdalik ko‘krak nishoni bilan taqdirlanganlar.`,
    ],
    image: "assets/img/management/MuxtarovMuzaffarAbdumuxitovich.jpg",
    info: [
      {
        icon: <FaPhone width={28} height={28} />,
        subtitle: "Telefon raqam",
        title: "47-870",
        secIcon: <IoIosMail width={28} height={28} />,
        secSubtitle: "Email manzili",
        secTitle: "nvs26@mail.ru",
      },
      {
        icon: <FaReceipt width={28} height={28} />,
        title: "Qabul kunlari",
        subtitle: "Chorshanba soat 14-00 dan 16-00 gacha",
      },
    ],
  },
  {
    name: "Farmonov Ixtiyor Asrorovich",
    subtitle: "Muassasa boshlig‘i o‘rinbosari",
    descriptionLabel: "Tarjimai hol",
    description: [
      `Farmonov Ixtiyor Asrorovich 13.07.1970 yilda Buxoro viloyati Kogon shahrida tavallud topgan.  Temir yo‘l soxasida 1994 yildan hozirgi vaqtgacha bir qator rahbarlik lavozimlarda ishlab kelmoqdalar. 2024 yildan “Temir yo‘l ijtimoiy xizmatlar” muassasasi boshlig‘ining o‘rinbosari lavozimida faoliyat olib bormoqda.  Kasbga bo‘lgan muxabbatlari va fidokorona mehnatlari uchun Faxriy temiryo‘lchi unvoni bilan taqdirlangan.`,
    ],
    image: "assets/img/management/FarmonovIxtiyorAsrorovich.jpg",
    info: [
      {
        icon: <FaPhone width={28} height={28} />,
        subtitle: "Telefon raqam",
        title: "47-870",
        secIcon: <IoIosMail width={28} height={28} />,
        secSubtitle: "Email manzili",
        secTitle: "nvs26@mail.ru",
      },
      {
        icon: <FaReceipt width={28} height={28} />,
        title: "Qabul kunlari",
        subtitle: "Payshanba soat 14-00 dan 16-00 gacha",
      },
    ],
  },
];

const Management = () => {
  return (
    <>
      <Section
        className={"cs_page_heading cs_bg_filed cs_center"}
        backgroundImage="https://medilo-react.vercel.app/assets/img/page_heading_bg.jpg"
      >
        <PageHeading secondaryData="Rahbariyat" data={headingData} />
      </Section>

      <Section topSpaceLg="80" topSpaceMd="120">
        <div className="container">
          {doctors?.map((item, index) => (
            <ManagementDetail key={index} index={index} doctor={item} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Management;
