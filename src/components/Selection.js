import React from 'react';
import styles from './Selection.module.scss';

const Selection = () => {
  return (
    <div className={styles.container}>


        <label>Select Appliance</label>

        <label>Sort By </label>
        <select>
            <option value="highest">Highest Price</option>
            <option value="lowest">Lowest Price</option>
        </select> 


        <label>Delivery Method</label>
        <input type="checkbox" value="quick ship"></input>
        <label for="quick ship">Quick Ship</label>

        <button>Clear All</button>
    </div>
  );
}

export default Selection;
