import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { NavLink } from 'react-router-dom'

import { scrollIt } from '../../helpers'

const Menu = ({
  pages: {
    loaded,
    data,
  },
  active,
  handleActive,
  handleClose,
  handleScroll,
}) => {
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
            onClick={handleClose}
            exact
          >
            Главная
          </NavLink>
        </li>
        <li className='header__mnu-item'>
          <NavLink
            to='/services' 
            className='header__mnu-link'
            onClick={handleClose}
          >
            Услуги
          </NavLink>
        </li>
        {loaded && Object.values(data).map(({ slug, title }) => (
          <li key={slug} className='header__mnu-item'>
            <NavLink 
              to={`/pages/${slug}`} 
              className='header__mnu-link'
              onClick={handleClose}
            >
              {title}
            </NavLink>
          </li>
        ))}
        <li className='header__mnu-item'>
          <NavLink 
            to='/gallery' 
            className='header__mnu-link' 
            onClick={handleClose}
          >
            Галерея
          </NavLink>
        </li>
        <li className='header__mnu-item'>
          <NavLink 
            to='/contacts' 
            className='header__mnu-link' 
            onClick={handleClose}
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default compose(
  inject('pages'),
  lifecycle({
    componentDidMount() {
      const { loaded, fetch } = this.props.pages
      if (!loaded) fetch()
    }
  }),
  withState('active', 'setActive', false),
  withHandlers({
    handleActive: ({ setActive, active }) => e => {
      e.preventDefault()
      setActive(!active)
    },
    handleClose: ({ setActive }) => () => setActive(false),
    handleScroll: () => e => {
      e.preventDefault()
      scrollIt(1500)
    }
  }),
  observer,
)(Menu)