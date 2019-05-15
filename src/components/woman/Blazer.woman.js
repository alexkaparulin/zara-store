import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanBlazer extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='blazer' id='1001'/>
    </Container>
    );
  }
}

export default WomanBlazer;

const Container = styled.div`
    display:flex;
`