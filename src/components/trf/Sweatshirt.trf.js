import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';

class TrfSweatshirt extends Component {
   
  render() {
   return (
    <Container>
      <DataMap name='sweatshirt' id='1002'/>
    </Container>
    );
  }
}

export default TrfSweatshirt;

const Container = styled.div`
    display:flex;
`