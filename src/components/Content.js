import React from 'react';

function Content(props) {
  return (
    <div dangerouslySetInnerHTML={{__html: props.data.text}}></div>
  );
}

export default Content;