import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Counter from './components/Counter';
import { Button } from 'antd';
import './App.css';

const data = [
  {
    title: 'Never Give up!',
    text: 'Dont give up the fight. The life changes continously. So you should keep fighting!',
  },
  {
    title: 'Life is too short',
    text: 'Never break a heart as the life is too short. Take a coffee and enjoy the life with your loved ones!',
  },
  {
    title: 'Nothing is more importand than life itself',
    text: 'It is your life. Dont let them ruin your life. Just smile and let them go!',
  },
];

const options = [
  {
    label: 'Red',
    value: 'red',
  },
  {
    label: 'Green',
    value: 'green',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className="container">
      <Button onClick={() => setShowCounter(!showCounter)}>Show Counter</Button>
      {showCounter ? <Counter start={100} /> : null}
      <br />
      <DropDown
        selected={selected}
        setSelected={setSelected}
        options={options}
      />
      <Accordion data={data} />
      <hr />
      <br />
      <Search />
    </div>
  );
};

export default App;
