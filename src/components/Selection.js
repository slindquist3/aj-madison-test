import React from 'react';
import styles from './Selection.module.scss';

const Selection = () => {
  return (
    <div className={styles.container}>
        <label>Select Appliance</label>
        <select>
            <option value="cooktop">Cooktop</option>
            <option value="dishwasher">Dishwasher</option>
            <option value="microwave">Microwave</option>
            <option value="range">Range</option>
            <option value="range hood">Range Hood</option>
            <option value="refrigerator">Refrigerator</option>
            <option value="wall oven">Wall Oven</option>
        </select> 

        <label>Sort By </label>
        <select>
            <option value="highest">Highest Price</option>
            <option value="lowest">Lowest Price</option>
        </select> 

        <label>Delivery Method</label>
        <input type="checkbox" value="quick ship"></input>
        <label htmlFor="quick ship">Quick Ship</label>

        <button>Clear All</button>
    </div>
  );
}

export default Selection;
