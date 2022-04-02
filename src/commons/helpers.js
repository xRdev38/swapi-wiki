const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function removeDash(string) {
  return string.replace(/[_]+/g, " ");
}

function formatDate(date) {
  const newDate = new Date(date);
  const numberDate = newDate.getDate();
  const year = newDate.getFullYear();
  const monthName = months[newDate.getMonth()];
  const dayName = days[newDate.getDay()];
  return `${dayName}, ${numberDate} ${monthName} ${year}`;
}

export default {
  capitalizeFirstLetter,
  removeDash,
  formatDate,
};
