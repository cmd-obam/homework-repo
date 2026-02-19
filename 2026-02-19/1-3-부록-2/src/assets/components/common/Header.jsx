import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const HeaderLayout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 15px;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

const Head = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const LightDark = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  line-height: 1;
  padding: 0;
`;

const Menu = styled.button`
  width: 70px;
  height: 30px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
`;

export default function Header() {
  return (
    <HeaderLayout>
      <Head>
        My <span>Blog</span>
      </Head>
      <Nav>
        <NavLink to="/">홈</NavLink>
        <NavLink to="/write">글쓰기</NavLink>
        <NavLink to="/login">로그인</NavLink>
        <LightDark>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-brightness-high"
            viewBox="0 0 16 16"
          >
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
          </svg>
        </LightDark>
        <Menu>더보기</Menu>
      </Nav>
    </HeaderLayout>
  );
}
