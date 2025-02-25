const languages = {
  uz: "/uz",
  ru: "/ru",
  en: "/en",
};

const activeLanguage = localStorage.getItem("i18nextLng") || "uz";

export const API_URL = `https://back.nsu-railway.uz${languages[activeLanguage]}`;
// export const API_URL = "https://7052-213-230-125-170.ngrok-free.app";
