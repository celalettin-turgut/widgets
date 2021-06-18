import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input } from 'antd';
import { search } from '../functions';

//Google-Translate-API:AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const Convert = ({ language, term }) => {
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [translate, setTranslate] = useState('');

  useEffect(() => {
    const timeId = setTimeout(() => setDebouncedTerm(term), 2000);
    return () => clearTimeout(timeId);
  }, [term]);

  useEffect(() => {
    console.log('Effect2');

    const search = async () => {
      const res = await axios.get(
        'https://translation.googleapis.com/language/translate/v2',
        {
          params: {
            q: debouncedTerm,
            target: language,
            format: 'text',
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
      console.log(res.data.data.translations[0].translatedText);
      setTranslate(res.data.data.translations[0].translatedText);
    };

    if (debouncedTerm) search();
  }, [debouncedTerm, language]);

  return (
    <div>
      <Input.TextArea value={translate} showCount maxLength={100} />
    </div>
  );
};

export default Convert;
