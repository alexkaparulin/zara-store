import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class ManShoes extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='trousers' id='1003'/>
    </Container>
    );
  }
}

export default ManShoes;

const Container = styled.div`
    display:flex;
`