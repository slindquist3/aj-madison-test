import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>Appliances Packages</h1>
        <p className={styles.subcopy}>Looking for a great deal on home appliances? Packages are the best bet. Most appliance packages consist of a range, a refrigerator, over-the-range microwave, and dishwasher. However some upscale brands have packages that incorporate wall ovens, cooktops, and integrated refrigerators.</p>
    </div>
  );
}

export default Header;
