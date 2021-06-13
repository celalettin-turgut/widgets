import React, { useState, useEffect } from "react";
import { Input, List } from "antd";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  const onChange = (event) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      console.log(data.query.search);
      setResults(data.query.search);
    };
    search();
  }, [term]);

  return (
    <div>
      <Input.Search
        placeholder='Input your search term'
        enterButton
        //there is no need to e.target.value | parameter is what the user inputs
        onSearch={(value) => console.log(value)}
        onChange={onChange}
        value={term}
      />
      <List
        itemLayout='horizontal'
        dataSource={results}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={
                <a
                  target={`_blank`}
                  href={`https://en.wikipedia.org?curid=${item.pageid}`}
                >
                  {item.title}
                </a>
              }
              //this is a trick to omit the span elements in the text
              description={
                <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Search;
