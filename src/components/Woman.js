import React, { Component } from 'react';
import styled ,{keyframes} from 'styled-components';
import Navbar from './Navbar';

import woman1 from '../images/womanImages/woman1.jpg'
import woman2 from '../images/womanImages/woman2.jpg'
import woman3 from '../images/womanImages/woman3.jpg'

class Woman extends Component {

  render() {

    return (
    <Container>
        <TopCon>
            <Navbar displayWoman='flex'/>
            <Picture src={woman1}></Picture>
            <Picture2 src={woman2}></Picture2>
            <Picture3 src={woman3}></Picture3>
        </TopCon>
    </Container>
    );
  }
}

export default Woman;

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