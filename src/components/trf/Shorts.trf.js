import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';

class TrfShorts extends Component {
   
  render() {
   return (
    <Container>
      <DataMap name='shorts' id='1002'/>
    </Container>
    );
  }
}

export default TrfShorts;

const Container = styled.div`
    display:flex;
`