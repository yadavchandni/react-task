import React from 'react';
import './_style.css';
import CartTable from '../components/cart-table';
import CartSearchField from '../components/cart-search-field';
import {ProductList} from '../constants/data';


class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        cartItems: []
    }
    this.handleSelect = this.handleSelect.bind(this);

  }


  handleSelect = (data) => {
      console.log('in cart comp---', data);
      let items = this.state.cartItems;
      items.push(data)

      this.setState({
          cartItems: items
      })
  }

  render() {
    console.log('Cart Render')
    return (
      <>
        <div className={'cart-section'}>
            <div className={'search-section'}>
                <div className={'search-field'}>
                     <CartSearchField productList={ProductList} handleSelect={this.handleSelect} />
                </div>
            </div>
            
            <div className={'tabel-section'}>
                <CartTable  list={this.state.cartItems} />
            </div>

        </div>
      </>
    );
  }

}

export default  Cart;