import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanShorts extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='shorts' id='1001'/>
    </Container>
    );
  }
}

export default WomanShorts;

const Container = styled.div`
    display:flex;
`