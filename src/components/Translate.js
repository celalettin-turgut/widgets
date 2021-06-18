import React, { useState } from 'react';
import DropDown from './DropDown';
import Convert from './Convert';
import { Input } from 'antd';

const options = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'German',
    value: 'de',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [term, setTerm] = useState('');
  return (
    <div>
      <Input
        allowClear='true'
        addonBefore='Text to translate:'
        onChange={e => setTerm(e.target.value)}
        value={term}
        size='small'
      />
      <DropDown
        label='Select Language'
        options={options}
        selected={language}
        setSelected={setLanguage}
      />
      <Convert language={language.value} term={term} />
    </div>
  );
};

export default Translate;
