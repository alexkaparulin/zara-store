import React, { Component } from 'react';
import styled ,{keyframes} from 'styled-components';
import Navbar from './Navbar';

import man1 from '../images/manImages/man1.jpg'
import man2 from '../images/manImages/man2.jpg'
import man3 from '../images/manImages/man3.jpg'

class Man extends Component {

  render() {

    return (
    <Container>
        <TopCon>
            <Navbar displayMan='flex'/>
            <Picture src={man1}></Picture>
            <Picture2 src={man2}></Picture2>
            <Picture3 src={man3}></Picture3>
        </TopCon>
    </Container>
    );
  }
}

export default Man;

const Container = styled.div`
    display:flex;
    flex-direction:column;
`
const TopCon = styled.div`
    display:flex;
    height:950px;
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
    height:100%;
    width:100%;
    animation: ${fadein} 40s  infinite linear;
    position:absolute;
`
const Picture2 = styled.img`
    opacity:0;
    height:100%;
    width:100%;
    animation: ${fadein} 40s 10s infinite linear;
    position:absolute;
`
const Picture3 = styled.img`
    opacity:0;    
    height:100%;
    width:100%;
    animation: ${fadein} 40s 20s infinite linear;
    position:absolute;
`