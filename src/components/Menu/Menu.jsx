import { TabLink } from "../TabLink/TabLink.jsx"

import styles from "./Menu.module.css"

export function Menu({ menu }) {

  return (
    <div className={ styles.root }>
      <h3 className={ styles.menuHeader }>Menu</h3>
      <ul className={ styles.menuList }>
        { menu?.length ? menu.map(({ id, name }) => (
          <li className={ styles.menuItem } key={ id }><TabLink to={ `/dish/${ id }` } >{ name }</TabLink></li>
        )) : null }
      </ul>
    </div>
  )
}