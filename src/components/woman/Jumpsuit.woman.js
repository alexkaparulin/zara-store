import React, { Component } from 'react';
import styled from 'styled-components';
import DataMap from '../Datamap';


class WomanJumpsuit extends Component {
   
  render() {
   return (
    <Container>
        <DataMap name='jumpsuit' id='1001'/>
    </Container>
    );
  }
}

export default WomanJumpsuit;

const Container = styled.div`
    display:flex;
`