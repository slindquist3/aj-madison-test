import React, { Component } from 'react';
import styles from './App.module.scss';
import Header from './components/Header';
import Selection from './components/Selection';
import ProductList from './components/ProductList';

export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch("https://demo3211013.mockable.io/ajmad")
      .then(res => res.json())
      .then(res => this.setState({ products: res }))
  }

  // change state with Selection form component

  render() {

    if ( this.state.products.length ) {
      console.log( this.state.products );
    }
    // add loading icon for when length of products is zero

    return (
      <div className={styles.app}>
        <Header />
        <Selection />
        <ProductList products={this.state.products} />
      </div>
    );

  }
}
