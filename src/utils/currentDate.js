const currentDate = (d = new Date()) => {
  const year = d.getFullYear();
  const month =
    d.getMonth() + 1 > 9 ? d.getMonth() + 1 : `0${Number(d.getMonth()) + 1}`;
  const day = d.getDate() > 9 ? d.getDate() : `0${d.getDate()}`;
  return `${year}-${month}-${day}`;
};

export default currentDate;
