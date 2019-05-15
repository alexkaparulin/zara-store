import React, { Component } from 'react';
import styled from 'styled-components';


class Shipping extends Component {
   
    render() {

    return (
    <Container>
        <Span>&times;</Span>
       <UlCo>
           <H2>SHIPPING, EXCHANGES AND RETURNS</H2>
           <H3>SHIPPING</H3>
           <H5>COLLECTION AT A ZARA STORE - FREE</H5>
           <Li> At the store you choose in 3-5 business days.</Li>
           <H5Home>HOME DELIVERY:</H5Home>
           <H5>&nbsp;&nbsp;-  STANDARD DELIVERY - 4.95 USD / FREE (ORDERS OVER 50 USD)</H5>
           <Li>The estimated delivery period is 2-4 business days, depending on the delivery address.</Li>
           <H5>&nbsp;&nbsp;-  ON THE SAME DAY OF THE PURCHASE - 9.95 USD</H5>
           <Li>Same day delivery in New York City for orders placed before 1:00 PM, Monday to Friday.<br/>
           Deliveries will be made between 6:00 PM and 10:00 PM EST (some exclusions may apply).</Li>
           <H5>&nbsp;&nbsp;-  EXPRESS DELIVERY - 9.95 USD</H5>
           <Li>The estimated delivery period is 1-2 business days.</Li>
           <Em>The time periods indicated above will be longer for more remote regions.</Em>
           <Li>At the time of processing your purchase, we will show you the available shipping methods,<br/>
            their cost and the delivery date of your order.</Li>
           <H3>EXCHANGES AND RETURNS</H3>
           <Li>You have 30 days from the shipping date to return your Zara.com purchase for FREE.</Li>     
           <H5>AT A ZARA STORE</H5>    
           <Li>You can exchange or return items at any Zara store in the country/region where the purchase was<br/> made.</Li> 
           <H5>FROM HOME</H5>    
           <Li>You can request a home pick-up by going to the Orders and Returns section.</Li>
           <H5>AT A DROP-OFF POINT</H5>
           <Li>You can leave your package at our courier’s nearest drop off location.</Li>
           <Li>Some of our items may have special return conditions. For more information, see Changes and<br/> Returns > Special Conditions.</Li>
           <Li>can find additional information about the Exchange and Return Policy or your right to<br/> withdrawal in our Terms and Conditions</Li>
       </UlCo>
    </Container>
    );
  }
}

export default Shipping;

const Container = styled.div`
    display:flex;
    justify-content:flex-start;
    height:800px;
    width:630px;
    z-index:1;
    background:white;
`
const Span = styled.span`
    position:absolute;
    top:0px;
    right:15px;
    font-size:30px;
    cursor:pointer;
    color:lightgray;
`
const UlCo = styled.ul`
    display:flex;
    overflow-y:scroll;
    flex-direction:column;
    list-style-type:none;
    padding-bottom:20px;
    z-index:1;
`
const H2= styled.h2``
const H3= styled.h3``
const H5= styled.h5``
const H5Home=styled.h5`
    margin-bottom:-7px;
`
const Li=styled.li`
    font-size:13px;
    font-weight:600;
    width:100%;
    color:#323232;
`
const Em= styled.em`
    margin:15px 0px;
    font-size:12px;
`