import React, { useEffect, useState } from 'react';
import Clock from './components/Clock';

const App = () => {
  // useState
  // useEffect
  // setInterval
  // setTimeout

  // useEffect => Hook que ofrece para enlazar efectos/logica a las fases del ciclo de vida de un componente
  // MOUNT => Primera Renderización
  // UPDATE => Primera renderización y cada rerenderización
  // UNMOUNT => Cuando el componente se desmonta del DOM

  const [count, setCount] = useState(23);
  const [users, setUsers] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const changeUser = () => {
    const newUser = users[Math.floor(Math.random() * users.length)];
    setCurrentUser(newUser);
  };

  const connect = (user) => {
    console.log(`Conectado el usuario ${user}`);
  };

  const disconnect = (user) => {
    console.log(`Descontando al usuario ${user}`);
  };

  // Mount
  useEffect(() => {
    setUsers(['Jefferson', 'Daniela', 'Agustin', 'Kendy', 'Juan Manuel']);
  }, []);

  // Update especifico
  // Conectar al usuario nuevo
  useEffect(() => {
    connect(currentUser);

    function cleanConnection() {
      disconnect(currentUser);
    }

    return cleanConnection;
  }, [currentUser]);

  return (
    <div className="h-full flex flex-col justify-center items-center p-10">
      {/* <h1 className="text-white text-5xl font-semibold">
        Template React Gen {count} - 1
      </h1>
      <button className="text-cyan-400 text-2xl" onClick={() => setCount(count - 1)}>
        Decrease Gen
      </button>
      <p className="text-white text-5xl font-semibold">
        Current User is: <span className="text-rose-500 text-6xl">{currentUser}</span>
      </p>
      <button className="text-rose-500 text-2xl" onClick={changeUser}>
        Change user
      </button> */}
      <Clock />
    </div>
  );
};

export default App;
