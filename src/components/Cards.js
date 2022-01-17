import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 180px;
  height: 80px;
  position: absolute;
  background-color: white;
  border-radius: 2px;
  bottom: 0;
  margin-left: 100px;
  margin-bottom: 30px;
  @media (max-width: 750px) {
    display: none;
  }
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 13px;
  padding-left: 10px;
`;
const Desc = styled.span`
  font-size: 10px;
  padding-left: 10px;
`;

const An = styled.span`
  color: blue;
  font-size: 10px;
  padding-left: 10px;
`;
const ImG = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const SecBox = styled.div`
  max-width: 100%;
  text-align: center;
  @media (min-width: 750px) {
    display: none;
  }
`;
function Cards({ img, desc, desc2 }) {
  return (
    <>
      <div style={{ display: "flex", width: "auto" }}>
        <ImG src={img} />
        <Box>
          <Title>{desc}</Title>
          <br />
          <Desc>{desc2}</Desc>
          <br />
          <An>바로 가기 -</An>
        </Box>
      </div>
      <SecBox>
        <Title>{desc}</Title>
        <br />
        <Desc>{desc2}</Desc>
        <br />
        <An>바로 가기 -</An>
      </SecBox>
    </>
  );
}

export default Cards;
