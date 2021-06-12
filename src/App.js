import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const data = [
  {
    title: "Never Give up!",
    text: "Dont give up the fight. The life changes continously. So you should keep fighting!",
  },
  {
    title: "Life is too short",
    text: "Never break a heart as the life is too short. Take a coffee and enjoy the life with your loved ones!",
  },
  {
    title: "Nothing is more importand than life itself",
    text: "It is your life. Dont let them ruin your life. Just smile and let them go!",
  },
];

const App = () => {
  return (
    <div>
      <Accordion data={data} />
      <hr />
      <br />
      <Search />
    </div>
  );
};

export default App;
