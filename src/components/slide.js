import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Cards from "./Cards";

const Wrap = styled.div`
  margin: 5% auto;
  width: 80%;
  .slick-prev:before {
    opaicty: 1;
    color: black;
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }
`;

const data = [
  {
    img: "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
    desc: "해, 커리어 EP 02 공개 ",
    desc2: "마지막 관문 2라운드의 승자는?",
  },
  {
    img: "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
    desc: "개발자 성장 비결 공개!",
    desc2: "Velog, 글 쓰는 개발자들의 이야기",
  },
  {
    img: "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg",
    desc: "UX 디자이너의 커리어 설계",
    desc2: "브랜드 가치를 더하는 디자인",
  },
  {
    img: "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg",
    desc: "포트폴리오를 부탁해!",
    desc2: "디자이너의 포폴 살펴보기",
  },
  {
    img: "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
    desc: "마케팅 주니어를 찾습니다",
    desc2: "1월 17일(월) 설명회 신청하기",
  },
  {
    img: "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
    desc: "마케팅 주니어를 찾습니다",
    desc2: "1월 17일(월) 설명회 신청하기",
  },
  {
    img: "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg",
    desc: "2022년 달라지는 노동법령",
    desc2: "노무관리 쟁점 한 눈에 파악하기",
  },
  {
    img: "https://static.wanted.co.kr/images/banners/1484/b2853456.jpg",
    desc: "성장하는 개발자가 되려면?",
    desc2: "OOO 검색하지 말 것!",
  },
  {
    img: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
    desc: "개발자 되고싶은 분들!?",
    desc2: "프론트엔드 무료 교육과정 참여하기",
  },
  {
    img: "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
    desc: "성과를 내는 마케팅",
    desc2: "실제 사례를 공개합니다!",
  },
];

function SlideShow() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrap>
      <Slider {...settings}>
        {data.map((p) => {
          return <Cards img={p.img} desc={p.desc} desc2={p.desc2} />;
        })}
      </Slider>
    </Wrap>
  );
}

export default SlideShow;
