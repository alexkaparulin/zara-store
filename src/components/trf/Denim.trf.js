import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';

class TrfDenim extends Component {
   
  render() {
   return (
    <Container>
      <DataMap name='denim' id='1002'/>
    </Container>
    );
  }
}

export default TrfDenim;

const Container = styled.div`
    display:flex;
`