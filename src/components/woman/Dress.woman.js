import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanDress extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='dress' id='1001'/>
    </Container>
    );
  }
}

export default WomanDress;

const Container = styled.div`
    display:flex;
`