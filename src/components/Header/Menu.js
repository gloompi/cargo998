import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { NavLink } from 'react-router-dom'

const Menu = ({
  pages: {
    loaded,
    data,
  },
  active,
  handleActive,
  handleClose,
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
    handleClose: ({ setActive }) => () => setActive(false)
  }),
  observer,
)(Menu)