import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';

class ManBags extends Component {
   
  render() {
   return (
    <Container>
      <DataMap name='bag' id='1003'/>
    </Container>
    );
  }
}

export default ManBags;

const Container = styled.div`
    display:flex;
`