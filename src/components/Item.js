import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

class Item extends Component {
constructor(props){
  super(props);
  this.state = {
    isClicked:false,
    selectedItem:[],
    selectedUrl:[],
    arrOf:[],
    isClickedPopUP:false,
    isClickedAvail:false,
  }
}
  localSave(item,url){
    let storedObject = item;
    let picUrl= url;
    localStorage.setItem('storedObject', JSON.stringify(storedObject));
    localStorage.setItem('storedUrl', JSON.stringify(picUrl));
  }
 
  render() {
    return (
    <Container style={{height:this.props.height,width:this.props.width}}>
      <ImgCon style={{height:this.props.heightImg,width:this.props.widthImg}}>
        <Link to='/product' onClick={()=>this.localSave(this.props.param,this.props.src)}>
          <Img src={this.props.src}></Img>
        </Link>
      </ImgCon>
      <TextCon>
        <P style={{fontSize:this.props.fontSize}}>{this.props.name}</P>
        <PPrice style={{fontSize:this.props.fontSize}}>{this.props.price}</PPrice>
      </TextCon>
    </Container>
    );
  }
}

export default Item;

const Container = styled.div`
    display:flex;
    height:100%;
    width:350px;
    flex-direction:column;
    margin:5px;
    @media screen and (max-width: 425px) {
   margin-top:550px;
  }
`
const ImgCon = styled.div`
  height:470px;
  width:350px;
`
const Img = styled.img`
  height:100%;
  width:100%;
`
const TextCon = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  width:100%;
`
const P = styled.p`
  font-size:12px;
  font-weight:400;
  letter-spacing:.3px;
`
const PPrice = styled(P)`
  margin-top:-10px;
`
