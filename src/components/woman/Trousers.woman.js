import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanTrousers extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='trousers' id='1001'/>
    </Container>
    );
  }
}

export default WomanTrousers;

const Container = styled.div`
    display:flex;
`