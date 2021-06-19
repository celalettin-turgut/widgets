import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';
import Counter from './components/Counter';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
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

const App = () => {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className='container'>
      <Header />
      <Route path='/'>
        <Accordion data={data} />
      </Route>
      <Route path='/search'>
        <Search data={data} />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
};

export default App;
