import React, { useEffect } from 'react';
import hljs from 'highlight.js';

import 'highlight.js/styles/tokyo-night-dark.css';

const CodeBlock = ({ language, value }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [value]);

  return (
    <pre>
      <code className={language}>
        {value}
      </code>
    </pre>
  );
};

export default CodeBlock;
