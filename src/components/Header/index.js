import React from 'react'
import { observer, inject } from 'mobx-react'
import { lifecycle, compose } from 'recompose'
import { Link } from 'react-router-dom'

import './style.scss'
import Loader from '../Loader'
import Menu from './Menu'

const Header = ({ 
  header: {
    loaded,
    logo
  }
}) => (
  <header id='header' className='header container'>
    {loaded 
      ? <Link className='header__home_link' to='/'>
        <img src={logo} alt='logo' />
      </Link>
      : <Loader />
    }
    <Menu />
  </header>
)

export default compose(
  inject('header'),
  lifecycle({
    componentDidMount() {
      const header = document.getElementById('header')
      const className = header.className
      window.addEventListener('scroll', e => {
        if (e.pageY >= 50) {
          if (className.includes('active')) return null
          header.className = `${className} active`
        } else {
          if (!className.includes('active')) {
            header.className = className
          }
        }
      })

      this.props.header.fetch()
    }
  }),
  observer,
)(Header)
