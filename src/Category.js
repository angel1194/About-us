import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  background : red;
  width : 100%;
`;

const Articulos = styled.div`
  display: flex;
  flex-flow : row wrap;
  flex : 2 1 auto;
  width : 75%;
`;

const Article = styled.article`
    background:yellow;
    flex : 1 1 25%;
    border-style: solid double;
    justify-content : space-between;
    margin-left: 120px;
    position : relative;
    left : -25px;
    
`;

const Aside = styled.div`
    flex: 1 1 25%;
    background:#E0FFFF;
    margin: 13px 0px 0px 0px;

`;
const Publicidad = styled.div`
      border-style: solid;
`;
const Img = styled.img`
  width:265px;
  height:265px;
  border-radius: 6px !important;
  margin:auto;
  position: relative;
  right:-2px;
`;

const ImgLog = styled.img`
  width:175px;
  height:100px;
  border-radius: 6px !important;
  margin:auto;
  position: relative;
  right:-25px;
`;

const ImgPubli = styled.img`
  width:225px;
  height:150px;
  border-radius: 6px !important;
  margin:auto;
  position: relative;
  right:-25px;
`;

export { Section, Article, Articulos,Img, Aside, Publicidad , ImgLog ,ImgPubli};
