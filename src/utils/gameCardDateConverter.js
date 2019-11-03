const convertDate = props => {
  const date = new Date(props);
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
    "December"
  ];
  const hours = date.getHours() < 9 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${hours}:${minutes} ${date.getDate()} ${
    months[date.getMonth()]
  }, ${date.getFullYear()}`;
};
export default convertDate;
