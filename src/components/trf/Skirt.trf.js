import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';

class TrfSkirt extends Component {
   
  render() {
   return (
    <Container>
      <DataMap name='skirt' id='1002'/>
    </Container>
    );
  }
}

export default TrfSkirt;

const Container = styled.div`
    display:flex;
`