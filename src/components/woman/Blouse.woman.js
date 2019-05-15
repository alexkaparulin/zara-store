import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanBlouse extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='blouse' id='1001'/>
    </Container>
    );
  }
}

export default WomanBlouse;

const Container = styled.div`
    display:flex;
`