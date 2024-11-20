export function truncateString(text, truncateNumber = 60) {
  if (text.length > truncateNumber) {
    return text.substring(0, truncateNumber) + "...";
  } else {
    return text;
  }
}
