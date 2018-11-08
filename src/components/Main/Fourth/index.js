import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose, lifecycle } from 'recompose'
import { Parallax } from 'react-scroll-parallax'

import Loader from '../../Loader'

const FourthSection = ({
  fourthSection: {
    loaded,
    data,
  },
}) => (
  <section className='section section__fourth'>
    <Parallax
      offsetYMax={0}
      offsetYMin={-10}
      slowerScrollRate
      tag='div'
    >
      <div className='parallax'></div>
    </Parallax>
    <ul className='fourth__list'>
      {loaded
        ? Object.values(data).map(({ title, descr }, idx) => (
          <li key={idx} className='fourth__item'>
            <h3 className='fourth__item-title'>{title}</h3>
            <span className='fourth__item-descr'>{descr}</span>
          </li>
        ))
        : <Loader />
      }
    </ul>
  </section>
)

export default compose(
  inject('fourthSection'),
  lifecycle({
    componentDidMount() {
      const { loaded, fetch } = this.props.fourthSection
      if (!loaded) fetch()
    }
  }),
  observer,
)(FourthSection)