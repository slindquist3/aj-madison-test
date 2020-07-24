import React from 'react';
import styles from './Product.module.scss';

const Product = ({
    brand,
    src
}) => (
    <div className={styles.container}>
        {brand}
        <img src={src} alt={brand} />
        <button>View Package</button>
    </div>
);

export default Product;
