import React, { useState } from "react";
import Calendar from "react-calendar";

const Calenddar = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = currentDate => {
    setDate(currentDate);
  };

  return <Calendar value={date} onChange={handleChange} />;
};

export default Calenddar;
