import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

const Wrapper = styled.nav`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
`;

const StackI = styled.img`
  width: 20px;
  height: 20px;
  padding-right: 10px;
`;
const Wanted = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
const WantedTab = styled.div`
  display: flex;
  width: 100px;
  padding-left: 250px;
`;
const BtnBox = styled.div`
  height: 25px;
  display: flex;
  padding-right: 250px;
`;

const SerBtn = styled.span`
  font-size: 13px;
  font-weight: 500;
  margin-right: 20px;
`;

const FinBtn = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-right: 20px;
  border: solid 2px;
  border-radius: 20px;
  color: gray;
  width: 90px;
  display: flex;
  justify-content: center;
`;

const Line = styled.div`
  background-color: gray;
  height: 2px;
  width: auto;
`;
function Navi() {
  return (
    <>
      <Wrapper>
        <WantedTab>
          <StackI src="https://static.wanted.co.kr/images/icon-menu.png" />
          <Wanted>wanted</Wanted>
        </WantedTab>
        <BtnBox>
          <SerBtn>채용</SerBtn>
          <SerBtn>이벤트</SerBtn>
          <SerBtn>직군별 연봉</SerBtn>
          <SerBtn>이력서</SerBtn>
          <SerBtn>커뮤니티</SerBtn>
          <SerBtn>프리랜서</SerBtn>
          <SerBtn>AI 합격예측</SerBtn>
          <SerBtn>
            <FontAwesomeIcon icon="search" />
            회원가입 / 로그인
          </SerBtn>
          <FinBtn>기업 서비스</FinBtn>
        </BtnBox>
      </Wrapper>
      <Line />
    </>
  );
}

export default Navi;
