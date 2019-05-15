import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class ManJeans extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='jeans' id='1003'/>
    </Container>
    );
  }
}

export default ManJeans;

const Container = styled.div`
    display:flex;
`