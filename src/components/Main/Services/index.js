import React from 'react'
import MaterialIcon from 'material-icons-react'
import { inject, observer } from 'mobx-react'
import { compose, lifecycle } from 'recompose'
import { Link } from 'react-router-dom'

import Loader from '../../Loader'

const Services = ({
  services: {
    loaded,
    data,
  },
}) => (
  <section className='section section__services'>
    <div className='section__title-wrapper'>
      <h2 className='section__title'>Услуги</h2>
      <span className='section__longtitle'>то что мы умеем делать хорошо</span>
    </div>
    <div className='container'>
      <ul className='service__list'>
        {loaded
          ? Object.values(data).map(({ slug, title, descr }, idx) => (
            <li key={slug} className='service__item'>
              <MaterialIcon icon={slug} size={50} />
              <div className='service__info'>
                <h3>{title}</h3>
                <span>{descr}</span>
              </div>
            </li>
          ))
          : <Loader />
        }
      </ul>
      <Link to='/services' className='third__content-link' >Подробнее</Link>
    </div>
  </section>
)

export default compose(
  inject('services'),
  lifecycle({
    componentDidMount() {
      const { fetch, loaded } = this.props.services
      if (!loaded) fetch()
    }
  }),
  observer,
)(Services)