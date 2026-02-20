import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const FristBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const FristTitle = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
`;
const FirstMemo = styled.div`
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

export default function Frist() {
  return (
    <FristBox>
      <FristTitle>React는 재미있다</FristTitle>
      <FirstMemo>정말 재미있는 라이브러리입니다.</FirstMemo>
      <StyledLink to="/post">← 목록으로 돌아가기 </StyledLink>
    </FristBox>
  );
}
