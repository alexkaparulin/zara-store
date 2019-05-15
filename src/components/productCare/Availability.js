import React, { Component } from 'react';
import styled from 'styled-components';

class Availability extends Component {
 
    render() {

    return (
    <Container>
      <Span>&times;</Span>
      <RowCon>
        <LDiv>
            <H2>Check in-store availability</H2>
            <P>Choose one or more sizes to check their in-store availability</P>
            <P>What size are you looking for?</P>
            <Row>
                <Li type="checkbox"></Li>
                <Size>S</Size>
            </Row>
            <Row>
                <Li type="checkbox"></Li>
                <Size>M</Size>
            </Row>
            <Row>
                <Li type="checkbox"></Li>
                <Size>L</Size>
            </Row>
            <Row>
                <Li type="checkbox"></Li>
                <Size>XL</Size>
            </Row>
            <Button>CONTINUE</Button>
        </LDiv>
        <RDiv>
            <Img src={this.props.url}></Img>
        </RDiv>
      </RowCon>
    </Container>
    );
  }
}

export default Availability;

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:first baseline;
    height:700px;
    width:830px;
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
const RowCon=styled.div`
    display:flex;
    height:100%;
    width:100%;
    padding-left:20px;
`
const LDiv=styled.div`
    display:flex;
    flex-direction:column;
    flex-basis:45%;
    padding-top:30px;
    height:85%;
    width:100%;
`
const H2= styled.h2``
const P= styled.p``
const Row= styled.div`
    display:flex;
    height:30px;
    align-items:center;
`
const Li= styled.input`
    height:20px;
    width:20px;
`
const Size= styled.p`
    margin-left:5px;
    font-size:14px;
`
const RDiv=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-basis:55%;
    height:100%;
    width:100%;
`
const Img= styled.img`
    width:85%;
    height:85%;
`
const Button=styled.button`
    background:black;
    margin-top:20px;
    width:40%;
    height:35px;
    border:none;
    color:white;
`