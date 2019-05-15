import React, { Component } from 'react';
import styled from 'styled-components';


class BottomNav extends Component {
    
    render() {
    
    return (
    <Container>
        <RowCon>
            <Ul>
                <HeadLi>HELP</HeadLi>
                <Li>SHOP AT ZARA.COM</Li>
                <Li>PRODUCT</Li>
                <Li>GIFT CARD</Li>
                <Li>GIFT RECEIPT</Li>
                <Li>PAYMENT</Li>
                <Li>SHIPPING</Li>
                <Li>EXCHANGES AND RETURN</Li>
                <Li>SHOPS AND COMPANY</Li>
                <Li>MY ACCOUNT</Li>
            </Ul>
        </RowCon>
        <RowCon>
            <Ul>
                <HeadLi>FOLLOW US</HeadLi>
                <Li>NEWSLETTER</Li>
                <Li>INSTAGRAM</Li>
                <Li>FACEBOOK</Li>
                <Li>TWITTER</Li>
                <Li>PINTEREST</Li>
                <Li>YOUTUBE</Li>
            </Ul>
        </RowCon>
        <RowCon>
            <Ul>
                <HeadLi>COMPANY</HeadLi>
                <Li>ABOUT US</Li>
                <Li>OFFICES</Li>
                <Li>STORES</Li>
                <Li>CONTACT</Li>
            </Ul>
        </RowCon>
        <RowCon>
            <Ul>
                <HeadLi>POLICIES</HeadLi>
                <Li>PRIVACY POLICY</Li>
                <Li>TERMS OF USE</Li>
                <Li>GIFT CARD CONDITIONS</Li>
                <Li>CALIFORNIA SUPPLY CHAINS ACT</Li>
                <Li>WEBSITE ACCESSIBILITY</Li>
            </Ul>
        </RowCon>
    </Container>
    );
  }
}

export default BottomNav;

const Container = styled.div`
    display:flex;
    justify-content:center;
`
const RowCon= styled.div`
    display:flex;
`
const Ul = styled.ul`
    display:flex;
    flex-direction:column;
    list-style-type:none;
    align-items:flex-start;
    margin-right:100px;
`
const HeadLi = styled.li`
    font-weight:700;
    margin-bottom:15px;
`
const Li = styled.li`
    margin-bottom:10px;
    font-size:14px;
`