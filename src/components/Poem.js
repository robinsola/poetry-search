import React from 'react';

function Poem(props) {
  return(
    <div>
      <h2>{props.title}</h2>
      <h4><em>{props.author}</em></h4>
      <pre>{props.lines.join('\n')}</pre>
    </div>
  );
}

export default Poem;
