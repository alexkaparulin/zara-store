import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanJeans extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='jeans' id='1001'/>
    </Container>
    );
  }
}

export default WomanJeans;

const Container = styled.div`
    display:flex;
`