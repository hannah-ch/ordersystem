import * as React from 'react';

import styles from './menuNav.module.scss';

interface MenuNavProps {}

const MenuNav: React.FunctionComponent<MenuNavProps> = (props) => {
    const MENU_DATA = ['LOOSE LEAF', 'TEA BAGS', 'GIFT SET'];

    // <li data-index="${index}" class="${index === parseInt(this.selectTab) ? "active" : ""}" data-key="navItem">${menu}</li>

    return (
        <ul className={styles.menuNav}>
            {MENU_DATA.map((menu, i) => (
                <li key={menu} className='' data-index={i} data-key='navItem'>
                    {menu}
                </li>
            ))}
        </ul>
    );
};

export default MenuNav;
