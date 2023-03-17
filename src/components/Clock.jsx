import React, { useEffect, useRef, useState } from "react";


const Clock = () => {
  const intervalRef = useRef();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;

    return `${formattedHours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")} ${ampm}`;
  };

  return <p className=" text-right text-green-900 text-2xl">{formatTime(time)}</p>;
};

export default Clock;
