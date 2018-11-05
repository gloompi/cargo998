import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <nav className='header__mnu'>
      <ul className='header__mnu-list'>
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
