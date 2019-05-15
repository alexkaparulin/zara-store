import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';

class TrfBags extends Component {
   
  render() {
   return (
    <Container>
      <DataMap name='bag' id='1002'/>
    </Container>
    );
  }
}

export default TrfBags;

const Container = styled.div`
    display:flex;
`