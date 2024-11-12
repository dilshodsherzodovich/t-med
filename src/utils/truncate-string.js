export function truncateString(text) {
  if (text.length > 60) {
    return text.substring(0, 80) + "...";
  } else {
    return text;
  }
}
