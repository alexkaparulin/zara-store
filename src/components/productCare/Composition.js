import React, { Component } from 'react';
import styled from 'styled-components';
import care from '../../images/care.png'


class Composition extends Component {
   
    render() {

    return (
    <Container>
        <Span>&times;</Span>
       <UlCo>
            <Li>COMPOSITION</Li>
            <Li>OUTTER SHELL</Li>
            <P>100% viscose</P>
            <Li>CARE</Li>
            <Img src={care}></Img>
       </UlCo>
    </Container>
    );
  }
}

export default Composition;

const Container = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    height:200px;
    width:230px;
    z-index:1;
    background:white;
`
const Span = styled.span`
    position:absolute;
    top:0px;
    right:5px;
    font-size:30px;
    cursor:pointer;
    color:lightgray;
`
const UlCo = styled.ul`
    display:flex;
    flex-direction:column;
    list-style-type:none;
`
const Li=styled.li`
    font-size:14px;
    font-weight:600;
    margin-top:5px;
`
const P= styled.p`
    font-size:12px;
    margin-bottom:20px;
`
const Img= styled.img`
    height:30px;
    width:150px;
`