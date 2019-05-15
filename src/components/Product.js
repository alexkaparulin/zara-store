import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import menu from '../images/menu.png';
import zaraLogo from '../images/zara logo.png';
import size from '../images/size.png'
import Navbar from './Navbar';
import JoinEmail from './JoinEmail';
import BottomNav from './BottomNav';
import Composition from './productCare/Composition';
import Availability from './productCare/Availability';
import Shipping from './productCare/Shipping';

class Product extends Component {
constructor(props){
  super(props);
  this.state = {
    isClicked:false,
    selectedItem:[],
    selectedUrl:[],
    arrOf:[],
    isClickedPopUP:false,
    isClickedAvail:false,
    isClickedShip:false,
  }
}


componentDidMount(){
  let storedItem = localStorage.getItem('storedObject');
  let storedUrl = localStorage.getItem('storedUrl');

  this.setState({selectedItem:JSON.parse(storedItem)});
  this.setState({selectedUrl:JSON.parse(storedUrl)});
}


toggleDropDown=(e)=>{
  e.preventDefault();
  if (!this.state.isClicked){
    this.setState({isClicked: true}, () => {
      console.log(this.state.isClicked)})
}
  else{
    this.setState({isClicked:false}, ()=>{
    console.log(this.state.isClicked)})}
}


sortImages=()=>{
  const {selectedItem} = this.state;
  let arr= [];
  for(let item in selectedItem.images){
    arr.push(selectedItem.images[item].url);
  }   
    return(
      arr.map((item,i)=><ArrImg key={i} src={item}></ArrImg>)
    )
}


pop=(e)=>{
  e.preventDefault();
  if (!this.state.isClickedPopUP){
    this.setState({isClickedPopUP: true}, () => {
    console.log(this.state.isClickedPopUP)})}
  else{
    this.setState({isClickedPopUP:false}, ()=>{
    console.log(this.state.isClickedPopUP)})}
}


avail=(e)=>{
  e.preventDefault();
  if (!this.state.isClickedAvail){
    this.setState({isClickedAvail: true}, () => {
    console.log(this.state.isClickedAvail)})}
  else{
    this.setState({isClickedAvail:false}, ()=>{
    console.log(this.state.isClickedAvail)})}
}


ship=(e)=>{
  e.preventDefault();
  if (!this.state.isClickedShip){
    this.setState({isClickedShip: true}, () => {
    console.log(this.state.isClickedShip)})}
  else{
    this.setState({isClickedShip:false}, ()=>{
    console.log(this.state.isClickedShip)})}
}

render() {
    const {isClicked,selectedItem,
           isClickedPopUP,isClickedAvail,isClickedShip,
           selectedUrl} = this.state;

      
    let clicked = isClicked? <Navbar display='none' 
                                    mTop='150px'
                                    position='sticky'
                                    top='0' 
                                    mLeft='30px' 
                                    background='white' 
                                    zIndex='1'
                                    width='200px'
                                    height='100%'/> : ''
    return (
    <Container>
        <TopCon changeOpacity={isClickedPopUP} 
                changeOpacityAv={isClickedAvail}>
                
            <Menu>
                <Img src={menu} onClick={this.toggleDropDown}></Img>
                <LogoContainer>
                    <ZaraLogo src={zaraLogo}></ZaraLogo>
                    <SubLogoText>COLLECTION 19</SubLogoText> 
                    {clicked}
                </LogoContainer>
            </Menu>
            <AllSearchPart>
                <Link to="/search" style={{textDecoration:'none'}}>
                    <SearchContainer>         
                    <Label>SEARCH</Label>
                    <Line></Line>
                    </SearchContainer>
                </Link>
            </AllSearchPart>
        </TopCon>
        <BottomCon>
          <ImgCon changeOpacity={isClickedPopUP}
                  changeOpacityAv={isClickedAvail}
                  changeOpacitySh={isClickedShip}>
            {this.sortImages()}
          </ImgCon>
          <DataCon>
            <InsideData>
              <H2 changeOpacity={isClickedPopUP} changeOpacityAv={isClickedAvail} changeOpacitySh={isClickedShip}>{selectedItem.name}</H2>
              <H3 changeOpacity={isClickedPopUP} changeOpacityAv={isClickedAvail} changeOpacitySh={isClickedShip}>{selectedItem.price+' EUR'}</H3>
              <P changeOpacity={isClickedPopUP} changeOpacityAv={isClickedAvail} changeOpacitySh={isClickedShip}> {selectedItem.description}</P>
              <PLine changeOpacity={isClickedPopUP} changeOpacityAv={isClickedAvail} changeOpacitySh={isClickedShip}></PLine>
              <Psize changeOpacity={isClickedPopUP} changeOpacityAv={isClickedAvail} changeOpacitySh={isClickedShip}>S</Psize>
              <Psize changeOpacity={isClickedPopUP} changeOpacityAv={isClickedAvail} changeOpacitySh={isClickedShip}>M</Psize>
              <Psize changeOpacity={isClickedPopUP} changeOpacityAv={isClickedAvail} changeOpacitySh={isClickedShip}>L</Psize>
              <Psize changeOpacity={isClickedPopUP} changeOpacityAv={isClickedAvail} changeOpacitySh={isClickedShip}>XL</Psize>
              <Psize changeOpacity={isClickedPopUP} changeOpacityAv={isClickedAvail} changeOpacitySh={isClickedShip}>XXL</Psize>
              <PLine changeOpacity={isClickedPopUP} changeOpacityAv={isClickedAvail} changeOpacitySh={isClickedShip}></PLine>
            <MySizeCon changeOpacity={isClickedPopUP} changeOpacityAv={isClickedAvail} changeOpacitySh={isClickedShip}>
              <P>What's my size?</P>
              <ImgSize src={size}></ImgSize>
            </MySizeCon>
            <Button type="submit" changeOpacity={isClickedPopUP} changeOpacityAv={isClickedAvail} changeOpacitySh={isClickedShip}>ADD</Button>
            <AddiCon>
              <Pli onClick={this.pop}>COMPOSITION AND CARE</Pli>
                <PopCon popUp={isClickedPopUP} onClick={this.pop}>
                  <Composition />
                </PopCon>
              <Pli onClick={this.avail}>CHECK IN-STORE AVAILABILITY</Pli>
              <PopConAvaila popUpSh={isClickedAvail} onClick={this.avail}>
                  <Availability url={selectedUrl}/>
                </PopConAvaila>
              <Pli onClick={this.ship}>SHIPPING, EXCHANGES AND RETURNS</Pli>
              <PopConShip popUpSh={isClickedShip} onClick={this.ship}>
                  <Shipping/>
                </PopConShip>
              <Pli>SHARE</Pli>
            </AddiCon>
            </InsideData>
          </DataCon>
        </BottomCon>
          <JoinCon changeOpacity={isClickedPopUP} changeOpacityAv={isClickedAvail} changeOpacitySh={isClickedShip}>
            <JoinEmail/>
          </JoinCon>
          <BNavCon changeOpacity={isClickedPopUP} changeOpacityAv={isClickedAvail} changeOpacitySh={isClickedShip}> 
            <BottomNav/>
          </BNavCon>
    </Container>
    );
  }
}

export default Product;

const Container = styled.div`
  display:flex;
  flex-direction:column;
  @media screen and (max-width: 768px) {
  align-items:center;
  }
`
const TopCon = styled.div`
  display:flex;
  opacity:${(props)=>props.changeOpacity||props.changeOpacityAv ||props.changeOpacitySh? '0.3' : '1'};
  @media screen and (max-width: 768px) {
  flex-direction:column;
  }
`
const Menu = styled.div`
  height:100%;
  width:50px;
  display:flex;
  align-items:center;
  align-self:center;
  @media screen and (max-width: 768px) {
    justify-content:center;
  }  
`
const Img = styled.img`
  height:100%;
  width:100%;
`
const LogoContainer = styled.div`
  display:flex;
  flex-direction:column;
  height:200px;
  width:400px;
  z-index:1;
`
const AllSearchPart= styled.div`
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
const ZaraLogo = styled.img`
  margin-top:50px;
  height:85px;
  width:210px;
`
const SubLogoText = styled.h3`
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-weight:100;
  margin-top:-4px;
  text-align:right;
`
const BottomCon= styled.div`
  display:flex;
  flex-direction:row;
  height:auto;
  opacity:${(props)=>props.changeOpacity||props.changeOpacityAv ||props.changeOpacitySh? '0.3' : '1'};
  @media screen and (max-width: 768px) {
   flex-direction:column;
   align-items:center;
  }
  @media screen and (max-width: 425px) {
   flex-direction:column;
   align-items:center;
  }

`  
const ImgCon = styled.div`
  flex-basis:60%;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  align-items:center;
  opacity:${(props)=>props.changeOpacity||props.changeOpacityAv ||props.changeOpacitySh? '0.3' : '1'};
`
const ArrImg= styled.img`
  width:80%;
  height:1200px;
  margin-bottom:20px;
  @media screen and (max-width: 768px) {
   height:800px;
   width:60%;
  }
  @media screen and (max-width: 425px) {
   width:100%;
  }
`
const DataCon = styled.div`
  flex-basis:40%;
  position:sticky;
  top:0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height:50%;
  @media screen and (max-width: 425px) {
   position:none;
  }
`
const InsideData = styled.div`
  display:flex;
  width:500px;
  flex-direction:column;
  align-items:flex-start;
  text-align:left;
`
const H2= styled.h2`
  opacity:${(props)=>props.changeOpacity||props.changeOpacityAv ||props.changeOpacitySh? '0.3' : '1'};
  @media screen and (max-width: 1024px) {
   font-size:14px;
  }
`
const H3 = styled.h3`
 opacity:${(props)=>props.changeOpacity||props.changeOpacityAv ||props.changeOpacitySh? '0.3' : '1'};
 @media screen and (max-width: 1024px) {
   font-size:12px;
  }
`
const P = styled.p`
  font-size:14px;
  opacity:${(props)=>props.changeOpacity||props.changeOpacityAv ||props.changeOpacitySh? '0.3' : '1'};
  @media screen and (max-width: 1024px) {
   font-size:10px;
  }
`
const PLine= styled.input`
  border:none;
  border-bottom:1px solid black;
  width:100%;
  margin-bottom:15px;
  opacity:${(props)=>props.changeOpacity||props.changeOpacityAv ||props.changeOpacitySh? '0.3' : '1'};
  @media screen and (max-width: 1024px) {
   margin-bottom:8px;
  }
`
const MySizeCon = styled.div`
  display:flex;
  height:40px;
  align-items:center;
  justify-content:flex-end;
  width:100%;
  opacity:${(props)=>props.changeOpacity||props.changeOpacityAv ||props.changeOpacitySh? '0.3' : '1'};
`
const ImgSize = styled.img`
  height:28px;
  width:28px;
  border-radius:100%;
  margin-left:5px;
  opacity:${(props)=>props.changeOpacity||props.changeOpacityAv ||props.changeOpacitySh? '0.3' : '1'};
`
const Psize=styled.li`
  list-style-type:none;
  display:flex;
  align-items:center;
  width:100%;
  padding-left:10px;
  height:45px;
  opacity:${(props)=>props.changeOpacity||props.changeOpacityAv ||props.changeOpacitySh? '0.3' : '1'};
  &:hover {
    background:lightgray;
  }
  @media screen and (max-width: 1024px) {
   font-size:12px;
  }
`
const AddiCon= styled.div`
  display:flex;
  flex-direction:column;
  margin-top:30px;
`
const Pli= styled.li`
  list-style-type:square;
  margin-bottom:10px;
  font-size:14px;
  cursor: pointer;
  opacity:${(props)=>props.changeOpacity||props.changeOpacityAv ||props.changeOpacitySh? '0.3' : '1'};
  @media screen and (max-width: 1024px) {
   font-size:12px;
  }
`
const Button = styled.button`
  width:100%;
  background:black;
  color:whitesmoke;
  font-weight:700;
  text-align:center;
  height:35px;
  font-size:17px;
  outline:none;
  border:none;
  color:white;
  cursor: pointer;
  opacity:${(props)=>props.changeOpacity||props.changeOpacityAv ||props.changeOpacitySh? '0.3' : '1'};
  @media screen and (max-width: 1024px) {
   font-size:12px;
  }
`
const JoinCon= styled.div`
  border-bottom:1px solid lightgray;
  padding-bottom:150px;
  margin-bottom:20px;
  opacity:${(props)=>props.changeOpacity||props.changeOpacityAv ||props.changeOpacitySh? '0.3' : '1'};
`
const BNavCon= styled.div`
  border-bottom:1px solid lightgray;
  padding-bottom:50px;
  opacity:${(props)=>props.changeOpacity||props.changeOpacityAv ||props.changeOpacitySh? '0.3' : '1'};
`
const PopCon= styled.div`
  display:${(props) => props.popUp ? 'flex' : 'none'};
  border:1px solid lightgray;
  position:fixed;
  align-items:center;
  justify-content:center;
  z-index:1;
  background:white;
  top:40%;
  left:50%;
`
const PopConAvaila = styled.div`
  display:${(props) => props.popUpSh ? 'flex' : 'none'};
  border:1px solid lightgray;
  position:fixed;
  align-items:center;
  justify-content:center;
  z-index:1;
  background:white;
  top:10%;
  left:30%;
`
const PopConShip = styled.div`
  display:${(props) => props.popUpSh ? 'flex' : 'none'};
  border:1px solid lightgray;
  position:fixed;
  align-items:center;
  justify-content:center;
  z-index:1;
  background:white;
  top:10%;
  left:30%;
`
