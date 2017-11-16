import styled from 'styled-components';

const Section = styled.section`
display: flex
`;
const Article = styled.article`
    width : 35%;
    margin : 10px 60px 0px 0px;
    background:#E0FFFF;
    flex: 1 1 40%;
`;

const Articulos = styled.div`
  display: flex;
  flex-flow : row wrap;
  width : 75%;
  justify-content: center;
`;
const Aside = styled.div`
    flex: 1 1 25%;
    background:#E0FFFF;
    margin: 13px 0px 0px 0px;
    transition-property: opacity, left;
 transition-duration: 3s, 5s, 2s, 1s;
`;
const Publicidad = styled.div`
      border-style: solid;
`;
const Img = styled.img`
  width:400px;
  height:300px;
  border-radius: 6px !important;
  margin:auto;
  position: relative;
  right:-13px;
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
