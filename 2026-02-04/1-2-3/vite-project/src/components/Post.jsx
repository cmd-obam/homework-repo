import { useState } from "react";

function Post({ outhor, content }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "10px",
      }}
    >
      <p
        style={{
          margin: "0",
        }}
      >
        {outhor} :
      </p>
      <p
        style={{
          margin: "0",
        }}
      >
        {content}
      </p>
    </div>
  );
}

export default Post;
