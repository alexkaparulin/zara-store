import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';

class TrfDress extends Component {
   
  render() {
   return (
    <Container>
      <DataMap name='dress' id='1002'/>
    </Container>
    );
  }
}

export default TrfDress;

const Container = styled.div`
    display:flex;
`