import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

const WrapperBig = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
`;

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
`;
const Wanted = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
const WantedTab = styled.div`
  display: flex;
  width: 100px;
  @media (min-width: 700px) {
    padding-left: 200px;
  }
`;

const BtnBox = styled.div`
  height: 25px;
  display: flex;
  padding-right: 250px;

  .finBtn {
    font-size: 13px;
    font-weight: 500;
    margin-right: 20px;
    border: solid 2px;
    border-radius: 20px;
    color: gray;
    width: 90px;
    display: flex;
    justify-content: center;

    @media (max-width: 1100px) {
      display: none;
    }
  }
  .finBtnNew {
    font-size: 13px;
    font-weight: 500;
    margin-right: 20px;
    margin-left: 80px;
    border: solid 2px;
    border-radius: 20px;
    color: blue;
    width: 180px;
    display: flex;
    justify-content: center;
    @media (min-width: 1090px) {
      display: none;
    }
  }
  .l1,
  .l2,
  .l3,
  .l4,
  .l5,
  .l6,
  .l7,
  .l8 {
    @media (max-width: 1200px) {
      display: none;
    }
  }

  .l9,
  .l10 {
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

const SerBtn = styled.div`
  display: inline-block;
  font-size: 8px;
  font-weight: 500;
  margin-right: 20px;
`;

const Line = styled.div`
  background-color: gray;
  height: 2px;
  width: auto;
`;

const HiddenBox = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
`;
function Navi() {
  return (
    <>
      <WrapperBig>
        <Wrapper>
          <WantedTab>
            <StackI src="https://static.wanted.co.kr/images/icon-menu.png" />
            <Wanted>wanted</Wanted>
          </WantedTab>

          <BtnBox>
            <SerBtn className="l1">채용</SerBtn>
            <SerBtn className="l2">이벤트</SerBtn>
            <SerBtn className="l3">직군별 연봉</SerBtn>
            <SerBtn className="l4">이력서</SerBtn>
            <SerBtn className="l5">커뮤니티</SerBtn>
            <SerBtn className="l6">프리랜서</SerBtn>
            <SerBtn className="l7">AI 합격예측</SerBtn>
            <SerBtn className="l8">
              <FontAwesomeIcon icon="search" />
              회원가입 / 로그인
            </SerBtn>
            <div className="finBtn">기업 서비스</div>
            <div className="finBtnNew">회원가입하기</div>
          </BtnBox>
        </Wrapper>
      </WrapperBig>
      <HiddenBox className="hiddenBox">
        <SerBtn>홈</SerBtn>
        <SerBtn>채용</SerBtn>
        <SerBtn>이벤트</SerBtn>
      </HiddenBox>

      <Line />
    </>
  );
}

export default Navi;
