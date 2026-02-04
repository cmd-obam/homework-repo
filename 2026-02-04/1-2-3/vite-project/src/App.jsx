import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import Post from "./components/Post";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid black",
        width: "500px",

        margin: "0 auto",
      }}
    >
      <h2
        style={{
          height: "50px",
          color: "pink",
          textAlign: "center",
          borderBottom: "2px solid black",
        }}
      >
        프로필
      </h2>
      <ProfileCard
        name="한찬우"
        age={35}
        job="Front-End Student"
        hobby="코딩,맛집"
      />
      <p>댓글 목록</p>
      <Post outhor="한교동" content="오늘도 어렵다" />
      <Post outhor="오밤빵이" content="치킨 먹고싶다" />
    </div>
  );
}

export default App;
