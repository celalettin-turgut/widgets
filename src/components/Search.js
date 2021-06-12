import React, { useState, useEffect } from "react";
import { Input } from "antd";

const Search = () => {
  const [term, setTerm] = useState("");

  const onChange = (event) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
    console.log(term);
  }, [term]);

  return (
    <div>
      <Input.Search
        placeholder='Input your search term'
        enterButton
        //there is no need to e.target.value | parameter is what the user inputs
        onSearch={(value) => console.log(value)}
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
