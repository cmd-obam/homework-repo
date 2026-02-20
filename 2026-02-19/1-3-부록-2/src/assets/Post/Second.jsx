import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const SecondBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondTitle = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
`;

const SecondMemo = styled.div`
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

export default function Second() {
  return (
    <SecondBox>
      <SecondTitle>SPA의 장점</SecondTitle>
      <SecondMemo>깜빡임이 없어서 좋아요.</SecondMemo>
      <StyledLink to="/post">← 목록으로 돌아가기 </StyledLink>
    </SecondBox>
  );
}
