import React from 'react';
import styles from './Product.module.scss';


const Product = ({
    brand,
    description,
    discount,
    finalPrice,
    listPrice,
    quickShip,
    series,
    src
}) => (
    <div className={styles.container}>
        <img className={styles.image} src={src} alt={brand} />
        <p className={styles.description}><span className={styles.brand}>{brand} {series} </span>{description}</p>
        {quickShip && <img className={styles["quick-ship"]} alt="quick shipping available" src="../../quickship-pdp.png" />}
        <p className={styles["final-price"]}>${finalPrice}</p>
        <p className={styles["list-price-container"]}>
            <span className={styles.discount}>Save ${discount} </span><span className={styles["list-price"]}>${listPrice}</span>
        </p>
        <button className={styles["view-package"]}>View Package</button>
    </div>
);

export default Product;
