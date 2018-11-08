import React, { Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import { compose, lifecycle } from 'recompose'

import Loader from '../../Loader'

const FifthSection = ({
  fifthSection: {
    basicLoaded,
    loaded,
    data,
    title,
    descr,
  },
}) => (
  <section className='section section__fifth'>
    <div className='section__title-wrapper'>
      {basicLoaded
        ? <Fragment>
            <h2 className='section__title'>{title}</h2>
            <span className='section__longtitle'>{descr}</span>
          </Fragment>
        : <Loader />
      }
    </div>
    <div className='container'>
      <ul className='partner__list'>
        {loaded
          ? Object.values(data).slice(0, 4).map(({ image }, idx) => (
            <li key={idx} className='partner__item'>
              <img src={image} alt='partner' />
            </li>
          ))
          : <Loader />
        }
      </ul>
    </div>
  </section>
)

export default compose(
  inject('fifthSection'),
  lifecycle({
    componentDidMount() {
      const { basicFetch, fetch, basicLoaded, loaded } = this.props.fifthSection
      if (!basicLoaded) basicFetch()
      if (!loaded) fetch()
    }
  }),
  observer,
)(FifthSection)