import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';

class TrfShirt extends Component {
   
  render() {
   return (
    <Container>
      <DataMap name='shirt' id='1002'/>
    </Container>
    );
  }
}

export default TrfShirt;

const Container = styled.div`
    display:flex;
`