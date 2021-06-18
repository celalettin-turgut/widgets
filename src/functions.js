import axios from 'axios';

export const search = async (term, language) => {
  const res = await axios.get(
    'https://translation.googleapis.com/language/translate/v2',
    {
      params: {
        q: term,
        target: language,
        format: 'text',
        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
      },
    }
  );
  //setTranslate(res.data.data.translations[0].translatedText);
};
