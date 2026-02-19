import React from "react";
import styled from "@emotion/styled";
import { cardData } from "../components/common/CardData";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TopContainer = styled.div`
  width: 800px;
  height: 400px;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 30px auto;
  padding: 40px 30px;
`;

const MainHead = styled.div`
  display: flex;
  font-size: 40px;
  font-weight: bold;
  color: black;
`;

const Maincontent = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

const MainBTN = styled.div`
  margin-top: 20px;
`;
const MainbtnText = styled.div`
  font-size: 20px;
  font-weight: bold;
  border-radius: 15px;
  width: 120px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
const MainEdu = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 25px;
  font-weight: bold;
`;
const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const CardItem = styled.div`
  width: 240px;
  padding: 22px;
  border-radius: 18px;
  background: gray;
  color: white;
`;

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const CardDesc = styled.div`
  font-size: 13px;
  opacity: 0.75;
  line-height: 1.4;
`;

export default function MainPage() {
  return (
    <MainContainer>
      <TopContainer>
        <MainHead>리엑트로 만드는 나만의 공간</MainHead>
        <Maincontent>
          공부한 내용을 기록하고 일상을 공유하는 블로그입니다.
          <br />
          리엑트의 다양한 기능을 직접 구현해보며 만들었습니다.
        </Maincontent>
        <MainBTN>
          <MainbtnText>글쓰기 시작</MainbtnText>
        </MainBTN>
      </TopContainer>
      <MainEdu>
        <CardHeader>배운 내용</CardHeader>
        <CardBox>
          {cardData.map((card) => (
            <CardItem key={card.id}>
              <CardTitle>{card.title}</CardTitle>
              <CardDesc>{card.desc}</CardDesc>
            </CardItem>
          ))}
        </CardBox>
      </MainEdu>
    </MainContainer>
  );
}
