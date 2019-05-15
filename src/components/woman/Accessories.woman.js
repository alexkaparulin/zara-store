import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanAccessories extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='earring' id='1001'/>
    </Container>
    );
  }
}

export default WomanAccessories;

const Container = styled.div`
    display:flex;
`