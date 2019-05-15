import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanBag extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='bag' id='1001'/>
    </Container>
    );
  }
}

export default WomanBag;

const Container = styled.div`
    display:flex;
`