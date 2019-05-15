import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class ManTshirt extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='t-shirt' id='1003'/>
    </Container>
    );
  }
}

export default ManTshirt;

const Container = styled.div`
    display:flex;
`