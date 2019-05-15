import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import InitialPage from './components/InitialPage';
import {
  Route
} from 'react-router-dom';
import Search from './components/Search';
import Man from './components/Man';
import ManJacket from './components/man/Jacket.man';
import ManBlazer from './components/man/Blazer.man';
import ManSuit from './components/man/Suit.man';
import ManKnit from './components/man/KnitWear.man';
import ManTrousers from './components/man/Trousers.man';
import ManShirt from './components/man/Shirt.man';
import ManTshirt from './components/man/Tshirt.man';
import ManPolo from './components/man/Polo.man';
import ManSweatshirt from './components/man/Sweatshirt.man';
import ManShoes from './components/man/Shoes.man';
import Woman from './components/Woman';
import WomanBlazer from './components/woman/Blazer.woman';
import WomanCoat from './components/woman/Coat.woman';
import WomanJacket from './components/woman/Jacket.woman';
import WomanDress from './components/woman/Dress.woman';
import WomanJumpsuit from './components/woman/Jumpsuit.woman';
import WomanKnitwear from './components/woman/Knitwear.woman';
import WomanBlouse from './components/woman/Blouse.woman';
import WomanTop from './components/woman/Top.woman';
import WomanTshirt from './components/woman/Tshirt.woman';
import WomanSkirt from './components/woman/Skirt.woman';
import WomanTrousers from './components/woman/Trousers.woman';
import WomanJeans from './components/woman/Jeans.woman';
import WomanShorts from './components/woman/Shorts.woman';
import WomanShoes from './components/woman/Shoes.woman';
import Womanbag from './components/woman/Bag.woman';
import WomanAccessories from './components/woman/Accessories.woman';
import WomanSweatshirt from './components/woman/Sweatshirt.woman';
import ManJeans from './components/man/Jeans.man';
import ManBags from './components/man/Bag.man';
import Kids from './components/Kids';
import Girls from './components/kids/Girl.kids';
import Boys from './components/kids/Boy.kids';
import KidsShoes from './components/kids/Shoes.kids';
import Trf from './components/TRF';
import TrfBags from './components/trf/Bags.trf';
import TrfCoat from './components/trf/Coats.trf';
import TrfDenim from './components/trf/Denim.trf';
import TrfDresses from './components/trf/Dress.trf';
import TrfJacket from './components/trf/Jacket.trf';
import TrfJeans from './components/trf/Jeans.trf';
import TrfShirt from './components/trf/Shirt.trf';
import TrfTshirt from './components/trf/Tshirt.trf';
import TrfShorts from './components/trf/Shorts.trf';
import TrfSkirt from './components/trf/Skirt.trf';
import TrfShoes from './components/trf/Shoes.trf';
import TrfSweatshirt from './components/trf/Sweatshirt.trf';
import Product from './components/Product';
  
class App extends Component {
  render() {
    return (
      <Container>
        <Route exact path="/" render={ ()=> <InitialPage/> }></Route>
        <Route path="/search" component={Search}></Route>
          <Route path="/man" component={Man}></Route>
          <Route path="/manjacket" component={ManJacket}></Route>
          <Route path="/manblazer" component={ManBlazer}></Route>
          <Route path="/mansuit" component={ManSuit}></Route>
          <Route path="/manknit" component={ManKnit}></Route>
          <Route path="/mantrousers" component={ManTrousers}></Route>
          <Route path="/manjeans" component={ManJeans}></Route>
          <Route path="/manshirt" component={ManShirt}></Route>
          <Route path="/mantshirt" component={ManTshirt}></Route>
          <Route path="/mantpolo" component={ManPolo}></Route>
          <Route path="/mansweatshirt" component={ManSweatshirt}></Route>
          <Route path="/manshoes" component={ManShoes}></Route>
          <Route path="/manbag" component={ManBags}></Route>
        <Route path="/woman" component={Woman}></Route>
          <Route path="/womanblazer" component={WomanBlazer}></Route>
          <Route path="/womancoat" component={WomanCoat}></Route>
          <Route path="/womanjacket" component={WomanJacket}></Route>
          <Route path="/womandress" component={WomanDress}></Route>
          <Route path="/womanjumpsuit" component={WomanJumpsuit}></Route>
          <Route path="/womanknitwear" component={WomanKnitwear}></Route>
          <Route path="/womanblouse" component={WomanBlouse}></Route>
          <Route path="/womantop" component={WomanTop}></Route>
          <Route path="/womantshirt" component={WomanTshirt}></Route>
          <Route path="/womanskirt" component={WomanSkirt}></Route>
          <Route path="/womantrousers" component={WomanTrousers}></Route>
          <Route path="/womanjeans" component={WomanJeans}></Route>
          <Route path="/womanshorts" component={WomanShorts}></Route>
          <Route path="/womansweatshirt" component={WomanSweatshirt}></Route>
          <Route path="/womanshoes" component={WomanShoes}></Route>
          <Route path="/womanbags" component={Womanbag}></Route>
          <Route path="/womanaccessories" component={WomanAccessories}></Route>
        <Route path="/kids" component={Kids}></Route>
          <Route path="/girl" component={Girls}></Route>
          <Route path="/boy" component={Boys}></Route>
          <Route path="/kidsshoes" component={KidsShoes}></Route>
        <Route path="/trf" component={Trf}></Route>
          <Route path="/trfbags" component={TrfBags}></Route>
          <Route path="/trfjacket" component={TrfJacket}></Route>
          <Route path="/trfcoats" component={TrfCoat}></Route>
          <Route path="/trfjeans" component={TrfJeans}></Route>
          <Route path="/trfdenim" component={TrfDenim}></Route>
          <Route path="/trfdresses" component={TrfDresses}></Route>
          <Route path="/trfshirt" component={TrfTshirt}></Route>
          <Route path="/trfshoes" component={TrfShoes}></Route>
          <Route path="/trftshirt" component={TrfShirt}></Route>
          <Route path="/trfskirt" component={TrfSkirt}></Route>
          <Route path="/trfsweatshirt" component={TrfSweatshirt}></Route>
          <Route path="/trfshorts" component={TrfShorts}></Route>
        <Route path="/product" component={Product}></Route>
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  text-align: center;
`