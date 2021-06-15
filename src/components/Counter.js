import React, { useState, useEffect } from 'react';

const Counter = ({ start }) => {
  const [count, setCount] = useState(start);

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
