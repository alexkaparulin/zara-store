import React, { Component } from 'react';
import styled ,{keyframes} from 'styled-components';
import Navbar from './Navbar';

import woman1 from '../images/trf/t1.jpg'
import woman2 from '../images/trf/t2.jpg'

class Trf extends Component {

  render() {

    return (
    <Container>
        <TopCon>
            <Navbar displayTrf='flex'/>
            <Picture src={woman1}></Picture>
            <Picture2 src={woman2}></Picture2>
        </TopCon>
    </Container>
    );
  }
}

export default Trf;

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
    animation: ${fadein} 40s infinite linear;
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