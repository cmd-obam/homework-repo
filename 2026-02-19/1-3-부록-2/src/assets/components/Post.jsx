import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const PostList = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const HomeLink = styled(Link)`
  color: black;
  text-decoration: none;
  border: 1px solid black;
  width: 100px;
  text-align: center;
`;

export default function Post() {
  return (
    <PostBox>
      <PostList>글 목록</PostList>
      <StyledLink to="/frist">1.React는 재미있다</StyledLink>
      <StyledLink to="/second">2.SPA의 장점</StyledLink>
      <StyledLink to="/three">3.Router 정복</StyledLink>

      <HomeLink to="/">홈으로</HomeLink>
    </PostBox>
  );
}
