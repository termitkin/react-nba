const currentYearMonthDays = () => {
  const d = new Date();
  const year = d.getFullYear();
  let month = d.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;

  const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

  const firstDayOfMonth = `${year}-${month}-01`;
  const lastDayOfMonth = `${year}-${month}-${daysInMonth(year, month, 0)}`;

  return [firstDayOfMonth, lastDayOfMonth];
};

export default currentYearMonthDays;
