import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanTshirt extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='t-shirt' id='1001'/>
    </Container>
    );
  }
}

export default WomanTshirt;

const Container = styled.div`
    display:flex;
`