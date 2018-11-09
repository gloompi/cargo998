import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose, lifecycle, withHandlers } from 'recompose'

import { createMarkup, scrollIt } from '../../../helpers'
import Loader from '../../Loader'

const First = ({ firstSection, handleScroll }) => {
  if (!firstSection.loaded) return <Loader />
  if (firstSection.error) return null
  const { title, longtitle, description } = firstSection.data
  return (
    <section className='section section__first'>
      <div className='container'>
        <div className='main__title-wrap'>
          <h1 className='main__title'>{title}</h1>
          <span className='main__longtitle'>{longtitle}</span>
        </div>
        <div className='main__descr-wrap' dangerouslySetInnerHTML={createMarkup(description)} />
        <a href='#order' onClick={handleScroll} className='main__order-btn'>Сделать заказ</a>
      </div>
    </section>
  )
}

export default compose(
  inject('firstSection'),
  lifecycle({
    componentDidMount() {
      const { firstSection, loaded } = this.props
      if(!loaded) firstSection.fetch()
    }
  }),
  withHandlers({
    handleScroll: () => e => {
      e.preventDefault()
      scrollIt(document.getElementById('point'), 150)
    }
  }),
  observer,
)(First)