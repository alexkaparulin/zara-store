import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import {Link} from 'react-router-dom'
import Item from './Item';
import JsonData from '../../src/json.json';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            original_list:JsonData.catalog[1],
            searched:[],
        }
    }
    ontype=(event)=>{
        const {original_list}= this.state;
        let data =[] ;
        for (let obj in original_list){
            let at = event.target.value;
                
                for (let arr in original_list[obj]){
                    
                    if (original_list[obj][arr].name.toLowerCase().includes(at)){
            
                        data.push(original_list[obj][arr]);
                        this.setState({searched:data});
                    }
                }
            }
        }
        
        render() {
            const {searched}= this.state;
               let searchedField = searched===''?'':searched.map((item,i) => { 
                return (<div key={i}><Item param={item} 
                                           src={item.images[0].url}
                                           name={item.name} 
                                           price={item.price +' EUR'}/></div>)})
              
    return (
    <Container>
        <Con1>
            <Navbar/>
        </Con1>
        <Con>
        <InputCon> 
            <Input type="text" onChange={this.ontype}></Input>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <P>&times;</P>
            </Link>
        </InputCon>
        <SearchedDataCon>
       {searchedField}
        </SearchedDataCon> 
        </Con>
    </Container>
    );
  }
}

export default Search;

const Container = styled.div`
    display:flex;
    flex-direction:row;
`
const Con = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:80px;
    height:auto;
    width:450%;   
`
const Con1 = styled.div`
    width:100%;
    height:100%;
`
const InputCon = styled.div`
    display:flex;
    width:100%;
    @media screen and (max-width: 425px) {
        display:none;
  }
`
const Input = styled.input`
    border:none;
    width:100%;
    border-bottom:1.5px solid black;
    outline:none;
    height:50px;
    font-size:32px;
    @media screen and (max-width: 1024px) {
    width:80%;
    margin-left:70px;
  }
    @media screen and (max-width: 768px) {
    width:70%;
  }
`
const P = styled.span`
    font-size:55px;
    margin-left:20px;
    color:black;
`
const SearchedDataCon = styled.div`
    height:auto;
    margin-top:40px;
    display:flex;
    flex-wrap:wrap;
    flex-basis:25%;
    justify-content:center;
`