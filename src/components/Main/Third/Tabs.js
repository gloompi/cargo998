import React from 'react'

export default ({ list, active, setActive }) => (
  <ul className='tabs__list'>
    {list.map(({ slug }) => {
      let name = slug.replace('_', ' ')
      name = `${name[0].toUpperCase()}${name.slice(1)}`
      const activeClass = () => active === slug ? 'active' : ''
      return <li key={slug} className={`tabs__item ${activeClass()}`}>
        <a 
          href='#tabs'
          onClick={e => {
            e.preventDefault()
            setActive(slug)
          }}
          className='tabs__link'
        >
          {name}
        </a>
      </li>
    })}
  </ul>
)
