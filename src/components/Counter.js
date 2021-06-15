import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalID = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  });

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{count}</h1>
    </div>
  );
};

export default Counter;
