import React, { useState, useEffect } from 'react';
import { Layout } from '../../hoc';

const App = () => {
  const [text, setText] = useState(null);
  useEffect(() => {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString('<html><body><div id="test1"></div></body></html>', 'text/html');
    console.log(parsedHtml.getElementById('test1'));
    setText('hello');

  }, []);
  return (
    <Layout>
      {text}
    </Layout>
  );
};

export default App;