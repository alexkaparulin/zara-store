import React, { Component } from 'react';
import styled,{keyframes} from 'styled-components';
import { Link } from 'react-router-dom';

import zara1 from '../images/zarafront1.jpg';
import zara2 from '../images/zarafront2.jpg';
import zara3 from '../images/zarafront3.jpg';
import zara4 from '../images/zarafront4.jpg';
import Navbar from './Navbar';
import JoinEmail from './JoinEmail';

class InitialPage extends Component {

      render() {
    return (
      <Container>
        <TopPart>
          <Link to="/search">
            <SearchContainer>         
              <Label>SEARCH</Label>
              <Line></Line>
            </SearchContainer>
          </Link>
          <Navbar/>
          <FrontPicContainer>
                <Picture src={zara1}></Picture>
              <SubH1Container>
                <H1>ABSTRACT PRINTS</H1>
                <P1>Modern and colorful abstract print shirt for sunny spring days</P1>
              </SubH1Container>
            <Picture2 src={zara2}></Picture2>
            <SubH2Container>
              <H2>JOIN LIFE SUSTAINABILITY</H2>
              <P2>HELP US TAKE CARE OF THE ENVIRONMENT</P2>
            </SubH2Container>
            <Picture3 src={zara3}></Picture3>
            <SubH3Container>
              <H3>LIVING</H3>
              <H3U>ZARA</H3U>
              <P3>Stella Von Senger</P3>
            </SubH3Container>
            <Picture4 src={zara4}></Picture4>
            <SubH4Container>
              <H4>BEYONG</H4>
              <H4U>NUTURE</H4U>
              <P4>TRF COLLECTION SS19</P4>
            </SubH4Container>
          </FrontPicContainer>
        </TopPart>
        <ButtomPart>
          <JoinEmail/>
        </ButtomPart>
        <Terms>PRIVACY POLICY  |  TERMS OF USE</Terms>
      </Container>
    );
  }
}

export default InitialPage;

const Container = styled.div`
  display:flex;
  flex-direction:column;
  overflow:auto;
`
const TopPart = styled.div`
  display:flex;
  height:950px;
`
const SearchContainer = styled.div`
  display:flex;
  width:100%;
  justify-content:center;
  top:40px;
  z-index:1;
  position:absolute;
  cursor: pointer;
`
const Label = styled.label`
  font-size:22px;
  font-weight:700;
  color:black;
  @media screen and (max-width: 768px) {
    font-size:19px;
  }
  @media screen and (max-width: 425px) {
   display:none;
  }
  
`
const Line = styled.p`
  border-bottom:1px solid black;
  width:225px;
  margin-left:10px;
  @media screen and (max-width: 768px) {
    width:150px;
  }
  @media screen and (max-width: 425px) {
   display:none;
  }
`
const FrontPicContainer = styled.div`
`
const fadein = keyframes`
  0% {
    opacity: 0;
  }
  11.11% {
    opacity: 1;
  }
  33.33% {
    opacity: 1;
  }
  44.44% {
    opacity: 0;
  }
  99.99% {
    opacity: 0;
  }
`
const Picture = styled.img` 
    opacity:0;
    animation: ${fadein} 40s  infinite linear;
    position:absolute;
    width:100%;
    height:100%;
    background-size:cover;
    background-repeat:no-repeat;
    background:zara1;
    @media screen and (max-width: 425px) {
    height:80%;
  }
`
const SubH1Container = styled.div`
  display:flex;
  flex-direction:column;
  position:absolute;
  top:400px;
  right:100px;
  opacity:0;
  animation: ${fadein} 40s infinite linear;
  @media screen and (max-width: 768px) {
    display:none;
  }
`
const H1 = styled.p`
  color:white;
  font-weight:800;
  z-index:1;
  text-align:center;
  font-size:80px;  
`
const P1 = styled.p`
  color:white;
  z-index:1;
  font-size:20px;
  margin-top:-90px;
  text-align:right;
`
const SubH2Container = styled.div`
  display:flex;
  flex-direction:column;
  position:absolute;
  top:420px;
  right:300px;
  opacity:0;
  animation: ${fadein} 40s 10s infinite linear;
  align-items:center;
  justify-content:center;
  @media screen and (max-width: 768px) {
    display:none;
  }
`
const H2 = styled(H1)`
  color:white;
`
const P2 = styled(P1)`
  color:white;
  margin-top:-60px;
  font-size:-22px;
  letter-spacing:.7px;
  font-weight:600;
`
const SubH3Container = styled.div`
  display:flex;
  flex-direction:column;
  position:absolute;
  top:310px;
  right:120px;
  opacity:0;
  animation: ${fadein} 40s 20s infinite linear;
  @media screen and (max-width: 768px) {
    display:none;
  }
`
const H3 = styled(H1)`
  color:black;
  font-size:100px;
  font-weight:500;
  font-family: 'Abril Fatface', cursive;
`
const H3U = styled(H1)`
  color:black;
  font-size:100px;
  margin-top:-120px;
  font-weight:500;
  font-family: 'Abril Fatface', cursive;
`
const P3 = styled(P1)`
  color:black;
`
const SubH4Container = styled.div`
  display:flex;
  flex-direction:column;
  position:absolute;
  top:250px;
  right:100px;
  opacity:0;
  animation: ${fadein} 40s 30s infinite linear;
  @media screen and (max-width: 768px) {
    display:none;
  }
`
const H4 = styled(H1)`
  color:white;
  font-weight:800;
  font-size:90px;
`
const H4U = styled(H1)`
  color:white;
  font-size:90px;
  font-weight:800;
  margin-top:-120px;
`
const P4 = styled(P1)`
  color:white;
`
const Picture2 = styled(Picture)`
    animation: ${fadein} 40s 10s infinite linear;
`
const Picture3 = styled(Picture)`
    animation: ${fadein} 40s  20s infinite linear;
`
const Picture4 = styled(Picture)`
    animation: ${fadein} 40s 30s infinite linear;
`
const ButtomPart= styled.div`
  height:500px;
  width:100%;
  display:flex;
  justify-content:center;
  @media screen and (max-width: 425px) {
    margin-top:-200px;
  }
`
const BoLi = styled.li`
  color:#666666;
  margin: 0 30px; 
  font-size:12px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight:700;
  @media screen and (max-width: 425px) {
    font-size:10px;
  }
`
const Terms = styled(BoLi)`
  list-style-type:none;
  text-align:right;
  margin-bottom:10px;
  letter-spacing:.5px;
`