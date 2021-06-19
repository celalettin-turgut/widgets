import React, { useState, useEffect } from 'react';
import { Input, List } from 'antd';
import axios from 'axios';

const Search = () => {
  //in order not to get an error we set the term, otherwise we get error from wikipedia api
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  const onChange = event => {
    //whenever we type, we set the term
    setTerm(event.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    //We create a function to make a request from wikipedia api
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });
      console.log(data.query.search);
      setResults(data.query.search);
    };
    if (debouncedTerm) search();
  }, [debouncedTerm]);

  // useEffect(() => {
  //   //We create a function to make a request from wikipedia api
  //   const search = async () => {
  //     const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
  //       params: {
  //         action: "query",
  //         list: "search",
  //         origin: "*",
  //         format: "json",
  //         srsearch: term,
  //       },
  //     });
  //     console.log(data.query.search);
  //     setResults(data.query.search);
  //   };

  //   //As we first load the website, we dont want to delay our search. So it invokes the function
  //   //immediately when the page loads
  //   if (term && !results.length) {
  //     console.log("Search without delay");
  //     search();
  //   } else {
  //     //otherwise search with delay in order to avoid unnecessary rendering
  //     console.log("Search with delay");
  //     const timerID = setTimeout(() => {
  //       if (term) {
  //         search();
  //       }
  //     }, 1000);

  //     return () => {
  //       //We must clear the timer before the next render.
  //       clearTimeout(timerID);
  //     };
  //   }
  // }, [term]);

  return (
    <div>
      <Input.Search
        placeholder='Input your search term'
        enterButton
        //there is no need to e.target.value | value parameter is what the user inputs
        onSearch={value => console.log(value)}
        onChange={onChange}
        value={term}
      />
      <List
        itemLayout='horizontal'
        dataSource={results}
        renderItem={item => (
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
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.snippet,
                  }}
                ></span>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Search;
