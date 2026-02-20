import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HomeTitle = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  border: 2px solid black;
`;

export default function Home() {
  return (
    <HomeContainer>
      <HomeTitle>미니 블로그 홈</HomeTitle>
      <p>환영합니다!</p>

      <StyledLink to="/post">글 목록 보러가기</StyledLink>
    </HomeContainer>
  );
}
