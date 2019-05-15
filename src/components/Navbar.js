import React, { Component } from 'react';
import styled from 'styled-components';
import zaraLogo from '../images/zara logo.png';
import { Link } from 'react-router-dom';
  
class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
    displayed: false,
    displayed2:true
    };
  }

  changeOpacity=(e)=>{

    let all='.change'+[e.target.value];
    for (let i=1 ; i < 11 ;i++){
      if(e.target.value===i){
        document.querySelector(all).style.display ='flex';
        
      }else{
        document.querySelector('.change'+[i]).style.display ='none'
      }
    }
   }
   displayW=()=>{
    document.querySelector('.change2').style.display ='flex';
   }
   changeColor=(e)=>{

    let all='.color'+[e.target.value];
    console.log(all)
    for (let i=1 ; i < 13 ;i++){
      if(e.target.value === i){
        document.querySelector(all).style.fontWeight = '800';
      }
      else{
        document.querySelector('.color'+[i]).style.fontWeight = '600';
      }
    }
   }

  render() {
    return (

    <LeftFrontColumn>
        <LogoContainer style={{display:this.props.display}}>
          <Link to="/">
            <ZaraLogo src={zaraLogo}></ZaraLogo>
          </Link>
          <SubLogoText>COLLECTION 19</SubLogoText>
        </LogoContainer>
        <Container style={{marginTop:this.props.mTop,
                          marginLeft:this.props.mLeft,
                          background:this.props.background,
                          zIndex:this.props.zIndex,
                          width:this.props.width,
                          height:this.props.height,
                          position:this.props.position,
                          top:this.props.top}}>
            <NavBarContainer>
                <NavBar>
                    <LiU onClick={(e)=>this.changeOpacity(e)}>NEW IN</LiU>
                      <NavCon className="change change1" >
                        <NavS>
                          <LiS>WOMAN</LiS>
                          <LiS>TRF</LiS>
                          <LiS>MAN</LiS>
                          <LiS>KIDS</LiS>
                          <LiS>SHOES&BAGS</LiS>
                        </NavS>
                      </NavCon>
                  <StyledLink to='/woman'>
                    <Li onClick={(e)=>this.changeOpacity(e)}>WOMAN</Li>
                  </StyledLink>
                    <NavConW className="change change2" style={{display:this.props.displayWoman}}>
                        <NavS>
                        <StyledLink to='/womanblazer'>
                          <LiS>BLAZERS</LiS>
                        </StyledLink>
                        <StyledLink to='/womanjacket'>
                          <LiS>JACKETS</LiS>
                        </StyledLink>
                        <StyledLink to='/womancoat'>
                          <LiS>COATS</LiS>
                        </StyledLink>
                        <StyledLink to='/womandress'>
                          <LiS>DRESSES</LiS>
                        </StyledLink>
                        <StyledLink to='/womanjumpsuit'>
                          <LiS>JUMPSUITS</LiS>
                        </StyledLink>
                        <StyledLink to='/womanknitwear'>
                          <LiS>KNITWEAR</LiS>
                        </StyledLink>
                        <StyledLink to='/womanblouse'>
                          <LiS>SHIRTS | BLOUSES</LiS>
                        </StyledLink>
                        <StyledLink to='/womantop'>
                          <LiS>TOPS</LiS>
                        </StyledLink>
                        <StyledLink to='/womantshirt'>
                          <LiS>T-SHIRTS</LiS>
                        </StyledLink>
                        <StyledLink to='/womanskirt'>
                          <LiS>SKIRTS</LiS>
                        </StyledLink>
                        <StyledLink to='/womantrousers'>
                          <LiS>TROUSERS</LiS>
                        </StyledLink>
                        <StyledLink to='/womanjeans'>
                          <LiS>JEANS</LiS>
                        </StyledLink>
                        <StyledLink to='/womanshorts'>
                          <LiS>SHORTS</LiS>
                        </StyledLink>
                        <StyledLink to='/womansweatshirt'>
                          <LiS>SWEATSHIRTS</LiS>
                        </StyledLink>
                          <LiS>CO-ORD SETS</LiS>
                        <StyledLink to='/womanshoes'>
                          <LiS>SHOES</LiS>
                        </StyledLink>
                        <StyledLink to='/womanbags'>
                          <LiS>BAGS</LiS>
                        </StyledLink>
                          <LiS>BEACHWEAR | SWIMWEAR</LiS>
                        <StyledLink to='/womanaccessories'>
                          <LiS>ACCESSORIES</LiS>
                        </StyledLink>
                        </NavS>
                      </NavConW>
                        <StyledLink to='/trf'>
                          <Li onClick={(e)=>this.changeOpacity(e)} value='3'>TRF</Li>
                        </StyledLink> 
                        <NavConT className="change change3" style={{display:this.props.displayTrf}}>
                        <NavS>
                        <StyledLink to='/trfjacket'>
                          <LiS>JACKETS</LiS>
                        </StyledLink>
                        <StyledLink to='/trfdresses'>
                          <LiS>DRESSES</LiS>
                        </StyledLink>
                        <StyledLink to='/trfshirt'>
                          <LiS>SHIRTS</LiS>
                        </StyledLink>
                        <StyledLink to='/trftshirt'>
                          <LiS>T-SHIRTS</LiS>
                        </StyledLink>
                        <StyledLink to='/trfjeans'>
                          <LiS>JEANS</LiS>
                        </StyledLink>
                        <StyledLink to='/trfdenim'>
                          <LiS>DENIM</LiS>
                        </StyledLink>
                        <StyledLink to='/trfskirt'>
                          <LiS>SKIRTS</LiS>
                        </StyledLink>
                        <StyledLink to='/trfshorts'>
                          <LiS>SHORTS</LiS>
                        </StyledLink>
                        <StyledLink to='/trfsweatshirt'>
                          <LiS>SWEATSHIRTS</LiS>
                        </StyledLink>
                        <StyledLink to='/trfcoats'>
                          <LiS>COATS</LiS>
                        </StyledLink>
                        <StyledLink to='/trfshoes'>
                          <LiS>SHOES</LiS>
                        </StyledLink>
                        <StyledLink to='/trfbags'>
                          <LiS>BAGS</LiS>
                        </StyledLink>
                        </NavS>
                      </NavConT>
                  <StyledLink to='/man'>  
                    <Li onClick={(e)=>this.changeOpacity(e)} value='4'>MAN</Li>
                  </StyledLink>  
                    <NavConM className="change change4" style={{display:this.props.displayMan}}>
                        <NavS>
                          <LiS>BASICS</LiS>
                          <LiS>OUTERWEAR</LiS>
                        <StyledLink to='/manjacket'>
                          <LiS className ='color1' value='1' onClick={(e)=>this.changeColor(e)}>JACKETS</LiS>
                        </StyledLink>
                        <StyledLink to="/manblazer" >
                          <LiS className ='color2' value='2' onClick={(e)=>this.changeColor(e)}>BLAZERS</LiS>
                        </StyledLink>
                        <StyledLink to='/mansuit'>
                          <LiS className ='color3' value='3' onClick={(e)=>this.changeColor(e)}>SUITS</LiS>
                        </StyledLink>
                        <StyledLink to='/manknit'>
                          <LiS className ='color4' value='4' onClick={(e)=>this.changeColor(e)}>KNITWEAR</LiS>
                        </StyledLink>
                        <StyledLink to='/mantrousers'>
                          <LiS className ='color5' value='5' onClick={(e)=>this.changeColor(e)}>TROUSERS</LiS>
                        </StyledLink>
                          <LiS>SHORTS</LiS>
                        <StyledLink to='/manjeans'>
                          <LiS className ='color6' value='6' onClick={(e)=>this.changeColor(e)}>JEANS</LiS>
                        </StyledLink>
                        <StyledLink to='/manshirt'>
                          <LiS className ='color7' value='7' onClick={(e)=>this.changeColor(e)}>SHIRTS</LiS>
                        </StyledLink>
                        <StyledLink to='/mantshirt'>
                          <LiS className ='color8' value='8' onClick={(e)=>this.changeColor(e)}>T-SHIRTS</LiS>
                        </StyledLink>
                        <StyledLink to='/mantpolo'>
                          <LiS className ='color9' value='9' onClick={(e)=>this.changeColor(e)}>POLOS</LiS>
                        </StyledLink>
                        <StyledLink to='/mansweatshirt'>
                          <LiS className ='color10' value='10' onClick={(e)=>this.changeColor(e)}>SWEATSHIRTS</LiS>
                        </StyledLink>
                        <StyledLink to='/manshoes'>
                          <LiS className ='color11' value='11' onClick={(e)=>this.changeColor(e)}>SHOES</LiS>
                        </StyledLink>
                        <StyledLink to='/manbag'>
                          <LiS className ='color12' value='12' onClick={(e)=>this.changeColor(e)}>BAGS&BACKPACKS</LiS>
                        </StyledLink>
                          <LiS>BEACHWEAR</LiS>
                          <LiS>ACCESSORIES</LiS>
                        </NavS>
                      </NavConM>
                    <StyledLink to='/kids'>
                      <Li onClick={(e)=>this.changeOpacity(e)} value='5'>KIDS</Li>
                    </StyledLink>
                    <NavConK className="change change5" style={{display:this.props.displayKids}}>
                        <NavS>
                        <StyledLink to='/girl'>
                          <LiS>GIRL</LiS>
                        </StyledLink>
                        <StyledLink to='/boy'>
                          <LiS>BOY</LiS>
                        </StyledLink>
                          <LiS>ACCESSORIES</LiS>
                        <StyledLink to='/kidsshoes'>
                          <LiS>SHOES</LiS>
                        </StyledLink>
                        </NavS>
                      </NavConK>
                    <Li onClick={(e)=>this.changeOpacity(e)} value ='6'>SHOES&BAGS</Li>
                    <NavConS className="change change6">
                        <NavS>
                          <LiS>WOMAN</LiS>
                          <LiS>TRF</LiS>
                          <LiS>MAN</LiS>
                          <LiS>KIDS</LiS>
                        </NavS>
                      </NavConS>
                    <Li onClick={(e)=>this.changeOpacity(e)} value='7'>CORNERSHOPS</Li>
                    <NavConC className="change change7">
                        <NavS>
                          <LiS>WOMAN</LiS>
                          <LiS>MAN</LiS>
                          <LiS>KIDS</LiS>
                        </NavS>
                      </NavConC>
                    <Li onClick={(e)=>this.changeOpacity(e)} value='8'>JOINLIFE</Li>
                    <NavConJ className="change change8">
                        <NavS>
                          <LiS>WOMAN</LiS>
                          <LiS>MAN</LiS>
                          <LiS>KIDS</LiS>
                          <LiS>EARTH HOUR</LiS>
                          <LiS>CLOTHES COLLECTING</LiS>
                          <LiS>PRODUCT</LiS>
                          <LiS>SUPPLIERS</LiS>
                          <LiS>STORES</LiS>
                          <LiS>GREEN WEB</LiS>
                          <LiS>SOCIAL ACTION</LiS>
                        </NavS>
                      </NavConJ>
                    <Li onClick={(e)=>this.changeOpacity(e)} value='9'>STORIES</Li>
                    <NavConST className="change change9">
                        <NavS>
                          <LiS>WOMAN</LiS>
                          <LiS>TRF</LiS>
                          <LiS>MAN</LiS>
                          <LiS>KIDS</LiS>
                          <LiS>VIEW. S</LiS>
                        </NavS>
                      </NavConST>
                    <LiUU onClick={(e)=>this.changeOpacity(e)} value='10'>+ Info</LiUU>
                    <NavConI className="change change10">
                        <NavS>
                          <LiS>Newsletter</LiS>
                          <LiS>Contact us</LiS>
                          <LiS>Stories</LiS>
                          <LiS>Press</LiS>
                          <LiS>Company</LiS>
                        </NavS>
                      </NavConI>
                </NavBar>
            </NavBarContainer>
        </Container>
    </LeftFrontColumn>  
    );
  }
}

export default Navbar;

const LeftFrontColumn = styled.div`
  display:flex;
  position:absolute;
  flex-direction:column;
  top:20px;
  left:20px;
  z-index:1;
  height:100%;
  @media screen and (max-width: 425px) {
    position:none;
    align-items:center;
    width:100%;
  }
`
const LogoContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  @media screen and (max-width: 425px) {
    width:100%;
    align-items:center;
  }
`
const ZaraLogo = styled.img`
  height:85px;
  width:210px;
  margin-bottom:3px;
  @media screen and (max-width: 768px) {
    height:70px;
    width:150px;
  }
  @media screen and (max-width: 425px) {
    height:80px;
    width:200px;
  }
`
const SubLogoText = styled.h3`
  font-family:Georgia, 'Times New Roman', Times, serif;
  font-weight:100;
  margin-top:-4px;
  text-align:right;
`
const Container = styled.div`
  display:flex;
  text-align: center;
  height:100%;
  @media screen and (max-width: 425px) {
    width:100%;
    justify-content:center;
  }
`
const NavBarContainer = styled.div`
`
const NavBar = styled.ul`
  display:flex;
  flex-direction:column;
  list-style-type:none;
  text-align:right;
  align-items:flex-end;
  margin-top:-5px;
  @media screen and (max-width: 425px) {
    align-items:center;
    text-align:left;
  }
`
const LiU = styled.li`
  margin:-5px 0;
  display:flex;
  text-align:right;
  font-weight:700;
  margin:20px 0 10px 0;
  font-size:17px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size:15px;
  }
  @media screen and (max-width: 425px) {
   font-size:20px;
  }
`
const Li = styled.li`
  display:flex;
  justify-content:flex-end;
  font-weight:700;
  text-align:right;
  font-size:17px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size:15px;
  }
  @media screen and (max-width: 425px) {
   font-size:20px;
   margin-top:20px;
  }
`
const LiUU = styled.li`
  font-weight:100;
  font-size:16px;
  margin-top:50px;
  font-size:18px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size:15px;
  }
  @media screen and (max-width: 425px) {
   font-size:20px;
  }
`
const NavCon = styled.ul`
  display:none;
  justify-content:flex-end;
  margin-bottom:15px;
`
const NavS = styled.ul`
  display:flex;
  flex-direction:column;
  list-style-type:none;
`
const LiS =styled.li`
  font-size:13px;
  font-weight:600;
`
const NavConW = styled(NavCon)`
  display:none;
`
const NavConT = styled(NavCon)`
  display:none;
`
const NavConM = styled(NavCon)`
  display:none;
`
const NavConK = styled(NavCon)`
  display:none;
`
const NavConS = styled(NavCon)`
  display:none;
`
const NavConC= styled(NavCon)`
  display:none;
`
const NavConJ= styled(NavCon)`
  display:none;
`
const NavConST= styled(NavCon)`
  display:none;
`
const NavConI= styled(NavCon)`
  display:none;
`
const StyledLink = styled(Link)`
  text-decoration:none;
  color:black;
`

