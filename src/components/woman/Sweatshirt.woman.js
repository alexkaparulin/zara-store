import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanSweatshirt extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='sweatshirt' id='1001'/>
    </Container>
    );
  }
}

export default WomanSweatshirt;

const Container = styled.div`
    display:flex;
`