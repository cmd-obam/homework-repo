import { useState } from "react";

function ProfileCard({ name, age, job, hobby }) {
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        textAlign: "center",
      }}
    >
      <h3>이름 :{name}</h3>
      <p>나이: {age}세</p>
      <p>직업: {job}</p>
      <p>취미: {hobby}</p>
    </div>
  );
}

export default ProfileCard;
