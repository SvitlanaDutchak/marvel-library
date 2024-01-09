import React from "react";
import { NavLink } from "react-router-dom";
import { bubble, slide as ReactBurgerMenu } from 'react-burger-menu'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Characters', path: '/characters' },
  { label: 'Comics', path: '/comics' },
]

const NavItem = ({ children, path }) => {
  return (
    <li className="nav__item">
      <NavLink className="nav__link" to={path}>
        {children}
      </NavLink>

    </li>
  )
}

const style = {
  display: "flex",
  flexDirection: "column",
  gap: 66,
  alignItems: "center",
  justifyContent: "center",
  height: "66%"
}

const Menu = () => {
  return (
    <ReactBurgerMenu>
      <ul className="burger-list" style={style}>
        {navItems.map((item) => <NavItem key={item.label} path={item.path}>{item.label}</NavItem>)}
        <li className="nav__item" >
          <a className="nav__link" href='#footer'>Contact</a>
        </li>
      </ul>
    </ReactBurgerMenu>
  )
}

const DesktopMenu = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {navItems.map((item) => <NavItem key={item.label} path={item.path}>{item.label}</NavItem>)}
        <li className="nav__item">
          <a className="nav__link" href='#footer'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export { Menu, DesktopMenu };