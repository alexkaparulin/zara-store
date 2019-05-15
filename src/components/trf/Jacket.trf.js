import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';

class TrfJacket extends Component {
   
  render() {
   return (
    <Container>
      <DataMap name='jacket' id='1002'/>
    </Container>
    );
  }
}

export default TrfJacket;

const Container = styled.div`
    display:flex;
`