import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanSkirt extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='skirt' id='1001'/>
    </Container>
    );
  }
}

export default WomanSkirt;

const Container = styled.div`
    display:flex;
`