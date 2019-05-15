import React, { Component } from 'react';
import styled from 'styled-components';
  
class JoinEmail extends Component {

  render() {
    return (
    <JoinContainer>
      <PJoin>JOIN OUR NEWSLETTER</PJoin>
      <EmailInput placeholder="Enter your email address here"></EmailInput>
      <BottomUl>
          <BoLi><A href="https://www.instagram.com/zara/">INSTAGRAM</A></BoLi>
          <BoLi><A href="https://www.facebook.com/Zara">FACEBOOK</A></BoLi>
          <BoLi><A href="https://twitter.com/ZARA">TWITTER</A></BoLi>
          <BoLi><A href="https://es.pinterest.com/zaraofficial">PINTEREST</A></BoLi>
          <BoLi><A href="https://www.youtube.com/user/zara">YOUTUBE</A></BoLi>
      </BottomUl>
    </JoinContainer>  
    );
  }
}

export default JoinEmail;

const JoinContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`
const PJoin = styled.p`
  font-size:24px;
  margin-top:120px;
  color:#323232;
  font-weight:700;
  letter-spacing:.5px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  @media screen and (max-width: 425px) {
    font-size:20px;
  }
`
const EmailInput = styled.input`
  margin-top:20px;
  border:none;
  width:300px;
  border-bottom:1px solid black;
  outline:none;
  text-align:center;
  font-size:16px;
  padding-bottom:25px;
  @media screen and (max-width: 425px) {
    font-size:12px;
  }
`
const BottomUl = styled.ul`
  display:flex;
  list-style-type:none;
  margin-top:120px;
`
const BoLi = styled.li`
  margin: 0 30px; 
  font-size:12px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight:700;
  @media screen and (max-width: 425px) {
    font-size:9px;
    margin: 0 10px;
  }
`
const A = styled.a`
  outline:none;
  text-decoration:none;
  color:#666666;
  &:hover {
    border-bottom:1px solid black;
  }
`