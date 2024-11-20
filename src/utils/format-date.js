export function formatDate(date) {
  const dateObj = new Date(date);
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];

  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];

  return `${day} ${month}`;
}
