import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import { NavLink } from 'react-router-dom'

const Menu = ({ active, handleActive }) => {
  const activeClass = () => active ? 'active' : ''
  return (
    <nav className={`header__mnu ${activeClass}`}>
      <a 
        href='#link'
        onClick={handleActive}
        className={`header__mnu-btn ${activeClass()}`}
      >
        <span />
      </a>
      <ul className={`header__mnu-list ${activeClass()}`}>
        <li className='header__mnu-item'>
          <NavLink 
            to='/' 
            className='header__mnu-link' 
            activeClassName='active'
            exact
          >
            Главная
          </NavLink>
        </li>
        <li className='header__mnu-item'>
          <NavLink
            to='/about'
            className='header__mnu-link' 
            activeClassName='active'
          >
            О компании
          </NavLink>
        </li>
        <li className='header__mnu-item'>
          <NavLink 
            to='/services' 
            className='header__mnu-link' 
            activeClassName='active'
          >
            Сервисы
          </NavLink>
        </li>
        <li className='header__mnu-item'>
          <NavLink 
            to='/prices' 
            className='header__mnu-link' 
            activeClassName='active'
          >
            Цены
          </NavLink>
        </li>
        <li className='header__mnu-item'>
          <NavLink 
            to='/contacts' 
            className='header__mnu-link' 
            activeClassName='active'
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default compose(
  withState('active', 'setActive', false),
  withHandlers({
    handleActive: ({ setActive, active }) => e => {
      e.preventDefault()
      setActive(!active)
    }
  })
)(Menu)