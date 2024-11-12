import React from "react";
import PageHeading from "../../Components/PageHeading";
import { FaPhone, FaSuitcase } from "react-icons/fa6";
import Section from "../../Components/Section";
import ManagementDetail from "../../Components/ManagementDetail";

const headingData = {
  title: "Rahbariyat",
};

const doctorDetails = {
  name: "MAMASIDIKOV MUXSINJON MUSAJONOVICH",
  subtitle: "Temir yo'l ijtimoiy xizmatlar muassasasi boshlig'i",
  descriptionLabel: "Lavozim majburiatlari",
  description: [
    `O'zbekiston Respublikasi qonunlarini, O'zbekiston Respublikasi Prezidentining farmonlari va qarorlarini, O'zbekiston Respublikasi Oliy Majlisi va Vazirlar Mahkamasining qarorlarini, Vazirlik buyruqlarini amalga oshirish bo'yicha chora-tadbirlarni ishlab chiqish. Sog'liqni saqlash va boshqa davlat organlari hamda "O'zbekiston temir yo'llari" AJ raisi, shuningdek ularning bajarilishini nazorat qilish. "O'zbekiston temir yo'llari" AJ Texnik-iqtisodiy kengashi tomonidan tasdiqlangan kontingentga tibbiy yordam ko'rsatish rejalarini ishlab chiqish. Tibbiy muassasalardagi barcha favqulodda vaziyatlarni o'z vaqtida va puxta tekshirishni tashkil etish (to'satdan o'lim, vaqtida tibbiy yordam ko'rsatmaslik, temir yo'l ishchilarida yuqumli kasalliklar paydo bo'lishi, baxtsiz hodisalar va boshqalar), shuningdek tekshirishlar natijalari va ko'rilgan choralar, zudlik bilan yuqori tashkilotlarga xabar berish. Vrachlar amaliyotida profilaktika, diagnostika va davolashning zamonaviy shakllarini, tibbiy yordamning barcha turlarini targ'ib qilish, shuningdek temir yo'l xodimlari orasida nogironlik va o'limning oldini olish, ularga yuqori malakali tibbiy xizmatlarni ko'rsatish. Tibbiy fan va texnikaning ilg'or tashkiliy shakllarini, sog'liqni saqlash sohasidagi yutuqlarni va profilaktika, sanitariya va terapevtik vositalarni joriy etish orqali temir yo'lchilar sog'lig'ini saqlash va mustahkamlashga qaratilgan chora-tadbirlarning bajarilishini nazorat qilish. Tibbiy xizmatga fuqarolarning takliflari, arizalari, xatlari va shikoyatlarini o'z vaqtida ko'rib chiqilishini, ularning har biri bo'yicha aniq qarorlar qabul qilinishini va ushbu qarorlarning bajarilishini nazorat qilishni ta'minlash. Barcha tadbirlarga rahbarlikni, jamoat kengashi ishida ishtirok etishni va jamoat o'rtasida o'tkaziladigan ijtimoiy-siyosiy tadbirlar paytida uning ishlashi uchun zarur shart-sharoitlarni ta'minlashni ta'minlash. Tibbiy xizmatning asosiy mutaxassislari bilan birgalikda tibbiyot uskunalari, dori vositalari va tibbiyot muassasalari uchun zarur bo'lgan boshqa tibbiy asbob-uskunalarga yillik buyurtmalarni ko'rib chiqish va tasdiqlash. Sog'liqni saqlash vazirligining 200-sonli buyrug'iga binoan, shuningdek, "O'zbekiston temir yo'llari" AJning 334-N va 551-N-sonli buyruqlari bilan davriy, muntazam tibbiy ko'riklar, tibbiy muassasalarda dispanser nazoratining tashkil etilishi va sifatini nazorat qilish. Tibbiyot muassasalarida tibbiy asbob-uskunalarni o'rnatish, ishlatish va texnik xizmat ko'rsatishni nazorat qilish. Tibbiy xizmatning barcha davolash-profilaktika muassasalari faoliyatini nazorat qilish, belgilangan tartibda amaliy yordam ko'rsatish tizimini nazorat qilish.`,
  ],
  image:
    "http://api.nsu-railway.uz/media/administration/photo_2021-10-15_20-51-16.jpg",
  info: [
    {
      icon: <FaSuitcase />,
      title: "Qabul kunlari",
      subtitle: "Dushanbadan Jumagacha",
      secIcon: <FaPhone />,
      secTitle: "Telefon raqam",
      secSubtitle: "+998 (71) 299 98 27",
    },
  ],
};

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
        <ManagementDetail data={doctorDetails} />
      </Section>
    </>
  );
};

export default Management;
