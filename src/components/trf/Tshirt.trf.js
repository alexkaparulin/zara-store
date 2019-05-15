import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';

class TrfTshirt extends Component {
   
  render() {
   return (
    <Container>
      <DataMap name='tshirt' id='1002'/>
    </Container>
    );
  }
}

export default TrfTshirt;

const Container = styled.div`
    display:flex;
`