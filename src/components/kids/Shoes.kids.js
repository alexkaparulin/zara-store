import React, { Component } from 'react';
import styled from 'styled-components';
import JsonData from '../../../src/json.json';
import Item from '../Item';
import Navbar from '../Navbar';
import {Link} from 'react-router-dom';

class KidsShoes extends Component {
    constructor(props){
        super(props);
        this.state = {
            original_list:JsonData.catalog[1],
            searched:[],
        }
    }
  render() {
    const {searched,original_list}= this.state;

    for (let obj in original_list){
        for (let arr in original_list[obj]){
            if (original_list[obj][arr].category_id.includes('1006') &&
            original_list[obj][arr].name.toLowerCase().includes('sneaker')){
                searched.push(original_list[obj][arr]);
              
            }
        }
    }
      let mapData= searched.map((item,i) => {
        return (<ItemDiv key={i}><Item param={item}  
                                   src={item.images[0].url} 
                                   name={item.name} 
                                   price={item.price +' EUR'}
                                   height={'1100px'}
                                   width={'800px'}
                                   heightImg={'1000px'}
                                   widthImg={'800px'}
                                   fontSize={'14px'}/></ItemDiv>)})
      return (
    <Container>
      <Div2>
        <Navbar position="sticky" display='flex' fontWeigh="700"/>
      </Div2>
      <Div>
        <Div3>
          <Link to="/search" style={{ textDecoration: 'none' }}>
            <SearchContainer>         
              <Label>SEARCH</Label>
              <Line></Line>
            </SearchContainer>
          </Link>
        </Div3>
        <DivSort>
          {mapData}
        </DivSort>
      </Div>
    </Container>
    );
  }
}

export default KidsShoes;

const Container = styled.div`
    display:flex;
`
const ItemDiv= styled.div`
`
const SearchContainer = styled.div`
  display:flex;
  width:100%;
  justify-content:center;
  align-items:center;
  z-index:1;
  cursor: pointer;
  margin-bottom:50px;
`
const Label = styled.label`
  font-size:20px;
  font-weight:700;
  color:black;
`
const Line = styled.p`
  border-bottom:1px solid black;
  width:225px;
  margin-left:10px;
`
const Div = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`
const Div2 = styled.div`
`
const Div3= styled.div`
    width:100%;
    height:100px;
    display:flex;
    justify-content:center;
    padding-top:50px;
    align-items:center;
    position:sticky;
    top:0;
    background:white;
`
const DivSort = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    margin-left:200px;
`