import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [idTimer, setIdTimer] = useState(null);

  const stopTime = () => {
    clearInterval(idTimer);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    console.log({ id });
    setIdTimer(id);
  }, []);

  return (
    <div>
      <p className="text-2xl text-yellow-400">{time.toString()}</p>
      <button onClick={stopTime} className="text-white text-xl bg-emerald-500 px-3 py-2">
        Stop Time
      </button>
    </div>
  );
};

export default Clock;
