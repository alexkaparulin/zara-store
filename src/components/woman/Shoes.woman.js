import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanShoes extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='shoes' id='1001'/>
    </Container>
    );
  }
}

export default WomanShoes;

const Container = styled.div`
    display:flex;
`