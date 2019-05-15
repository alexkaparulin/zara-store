import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanTop extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='top' id='1001'/>
    </Container>
    );
  }
}

export default WomanTop;

const Container = styled.div`
    display:flex;
`