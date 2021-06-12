import React, { useState } from "react";
import { Collapse } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
const { Panel } = Collapse;

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  function callback(key) {
    console.log(key);
    setActiveIndex(key);
  }

  const renderedItems = data.map((element, index) => {
    return (
      <Panel header={element.title} key={index + 1}>
        <p>{element.text}</p>
      </Panel>
    );
  });

  return (
    <div>
      <Collapse
        accordion
        activeKey={activeIndex}
        onChange={(key) => callback(key)}
      >
        {renderedItems}
      </Collapse>
    </div>
  );
};

export default Accordion;
