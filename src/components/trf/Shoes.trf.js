import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';

class TrfShoes extends Component {
   
  render() {
   return (
    <Container>
      <DataMap name='shoes' id='1002'/>
    </Container>
    );
  }
}

export default TrfShoes;

const Container = styled.div`
    display:flex;
`