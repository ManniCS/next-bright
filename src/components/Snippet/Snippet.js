'use client';

import React from "react";

function Snippet({children}) {
  const [
    isSnippetShown,
    setisSnippetShown,
  ] = React.useState(false);

  return (
    isSnippetShown ? (
      <>
        {children}
      </>
    ) : (
      <div className="reveal">
        <button
          onClick={() =>
            setisSnippetShown(true)
          }
        >
          Reveal Content
        </button>
      </div>
    )
  );
}

export default Snippet;
