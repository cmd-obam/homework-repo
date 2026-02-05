import { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoggedInClick = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
        width: "400px",
        border: "1px solid black",
        borderRadius: "50px",
        backgroundColor: "rgba(59, 60, 83, 1)",
      }}
    >
      <h3
        style={{
          fontSize: "18px",
          textAlign: "center",
          color: "white",
        }}
      >
        {isLoggedIn ? "환영합니다" : "로그인해주세요"}
      </h3>
      <p
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        {isLoggedIn
          ? "회원님, 반가워요!"
          : "더 많은 기능을 보시려면 로그인해주세요"}
      </p>
      <button
        onClick={handleLoggedInClick}
        style={{
          width: "100px",
          height: "30px",
          margin: "0 auto",
          border: "none",
          borderRadius: "50px",
          backgroundColor: "rgb(3, 10, 202)",
          color: "white",
        }}
      >
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>
    </div>
  );
}

export default Login;
