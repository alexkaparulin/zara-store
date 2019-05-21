import React, { Component } from 'react';
import styled ,{keyframes} from 'styled-components';
import Navbar from './Navbar';

import kids1 from '../images/kidsImages/k1.jpg'
import kids2 from '../images/kidsImages/k2.jpg'
import kids3 from '../images/kidsImages/k3.jpg'

class Kids extends Component {

  render() {

    return (
    <Container>
        <TopCon>
            <Navbar displayKids='flex'/>
            <Picture src={kids1}></Picture>
            <Picture2 src={kids2}></Picture2>
            <Picture3 src={kids3}></Picture3>
        </TopCon>
    </Container>
    );
  }
}

export default Kids;

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
    @media screen and (max-width: 425px) {
    height:140%;
    width:106%;
  }
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