import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

import 'highlight.js/styles/tokyo-night-dark.css';
import './codeblock.css';

const CodeBlock = ({ language, value }) => {

  const codeRef = useRef();

  useEffect(() => {
    if (codeRef.current && !codeRef.current.classList.contains('hljs')) {
      hljs.highlightElement(codeRef.current);
    }
  }, [value]);
  return (
    <pre className='line-numbers'>
      <code ref={codeRef} className={`code-block ` + language}>
        {value}
      </code>
    </pre>
  );
};


export default CodeBlock;
