import React from 'react';
import styles from './ProductGrid.module.scss';
import Product from './Product';

const ProductGrid = ({ products }) => {
  return (
    <div className={styles.container}>
        {products.map( product => (
            <Product 
                key={product.sku}
                brand={product.brand} 
                src={`https://assets.ajmadison.com/${product.image.folder}/${product.image.filename}.jpg`}
            />
        ) )}
    </div>
  );
}

export default ProductGrid;
