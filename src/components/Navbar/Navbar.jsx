import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <ul >
        <li className={style.nav__item} ><NavLink className={(navData) => navData.isActive ? style.active : style.link } to="/profile">Profile</NavLink></li>
        <li className={style.nav__item} ><NavLink className={(navData) => navData.isActive ? style.active : style.link } to="/dialogs">Dialogs</NavLink></li>
      </ul>
    </nav>
  )
}
export default Navbar;