import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanCoat extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='coat' id='1001'/>
    </Container>
    );
  }
}

export default WomanCoat;

const Container = styled.div`
    display:flex;
`