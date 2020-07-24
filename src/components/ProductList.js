import React from 'react';
import styles from './ProductList.module.scss';
import Product from './Product';

//change to ul
const ProductList = ({ products }) => (
    <div className={styles.container}>
        {products.map( product => (
                <Product 
                    key={product.sku}
                    description={product.description}
                    // fix the discount computation
                    discount={Math.floor( product.prices.list_price - product.prices.final )}
                    brand={product.brand} 
                    finalPrice={product.prices.final}
                    listPrice={product.prices.list_price}
                    quickShip={product.is_quick_ship}
                    series={product.series}
                    src={`https://assets.ajmadison.com/${product.image.folder}/${product.image.filename}.jpg`}
                />
        ) )}
    </div>
  );

export default ProductList;
