import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanKnitwear extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='knit' id='1001'/>
    </Container>
    );
  }
}

export default WomanKnitwear;

const Container = styled.div`
    display:flex;
`