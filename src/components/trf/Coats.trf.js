import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';

class TrfCoat extends Component {
   
  render() {
   return (
    <Container>
      <DataMap name='coat' id='1002'/>
    </Container>
    );
  }
}

export default TrfCoat;

const Container = styled.div`
    display:flex;
`