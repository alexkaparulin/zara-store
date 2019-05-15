import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';

class TrfJeans extends Component {
   
  render() {
   return (
    <Container>
      <DataMap name='jeans' id='1002'/>
    </Container>
    );
  }
}

export default TrfJeans;

const Container = styled.div`
    display:flex;
`