import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const ThreeBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThreeTitle = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
`;

const ThreeMemo = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
  width: 100px;
  font-size: 10px;
  padding: 10px;
`;

export default function Three() {
  return (
    <ThreeBox>
      <ThreeTitle>Router 정복</ThreeTitle>
      <ThreeMemo>이제 페이지 이동은 식은죽 먹기</ThreeMemo>
      <StyledLink to="/post">← 목록으로 돌아가기 </StyledLink>
    </ThreeBox>
  );
}
