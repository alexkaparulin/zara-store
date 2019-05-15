import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';

class WomanJacket extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='jacket' id='1001'/>
    </Container>
    );
  }
}

export default WomanJacket;

const Container = styled.div`
    display:flex;
`