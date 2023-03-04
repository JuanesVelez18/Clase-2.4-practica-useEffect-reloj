import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => setTime(new Date()), []);

  useEffect(() => {
    let id;
    if (isActive) id = setTimeout(() => setTime(new Date()), 1000);

    return () => {
      if (id) clearTimeout(id);
    };
  }, [time, isActive]);

  return (
    <div>
      <p className="text-2xl text-yellow-400">{time?.toString()}</p>
      <button
        onClick={() => setIsActive(!isActive)}
        className={
          'block text-white text-xl font-bold px-3 py-2 mx-auto mt-5 rounded-md' +
          (isActive ? ' bg-red-400' : ' bg-emerald-500')
        }
      >
        {isActive ? 'Stop Time' : 'Activate Time'}
      </button>
    </div>
  );
};

export default Clock;
