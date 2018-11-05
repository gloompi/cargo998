import React from 'react'
import MaterialIcon from 'material-icons-react'
import { inject, observer } from 'mobx-react'
import { compose, lifecycle } from 'recompose'

import withShapeBg from '../../withShapeBg'
import Loader from '../../Loader'

const Second = ({ 
  secondSection: {
    loaded,
    data,
  },
}) => (
  <section className='section section__second'>
    <div className='container'>
      <ul className='second__icons-list'>
        {loaded 
          ? Object.values(data).map(({ slug, title, description }, idx) => (
            <li key={idx} className='second__icon-item'>
              <span className='icon__wrap'>
                <MaterialIcon icon={slug} size={50}/>
              </span>
              <h3 className='second__icon-title'>{title}</h3>
              <span className='second__icon-descr'>{description}</span>
            </li>
          ))
          : <Loader />
        }
      </ul>
    </div>
  </section>
)

export default compose(
  inject('secondSection'),
  lifecycle({
    componentDidMount() {
      const { loaded, fetch } = this.props.secondSection
      if (!loaded) fetch()
    }
  }),
  withShapeBg,
  observer,
)(Second)
