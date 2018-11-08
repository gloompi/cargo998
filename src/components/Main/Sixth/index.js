import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose, lifecycle } from 'recompose'

import Loader from '../../Loader'

const SixthSection = ({
  sixthSection: {
    basicLoaded,
    loaded,
    data,
    title,
    description,
    address,
    email,
  },
}) => {
  if (!basicLoaded) return <Loader />
  return <section className='section section__fifth'>
    <div className='section__title-wrapper'>
      <h2 className='section__title'>{title}</h2>
      <span className='section__longtitle'>{description}</span>
    </div>
    <div className='sixth__wrap container'>
      <address className='location location__info'>
        <h3 className='location__info-title'>Our Address</h3>
        <span className='location__info-descr'>{address}</span>
        <h3 className='location__info-title'>Telephones</h3>
        <span className='location__info-descr'>
          {loaded && Object.values(data).map(({ phone }, idx) => (
            <a key={idx} href={`tel: ${phone}`}>{phone}</a>
          ))}
        </span>
        <h3 className='location__info-title'>E-mail</h3>
        <span className='location__info-descr'>
          <a href={`to: ${email}`}>{email}</a>
        </span>
      </address>
      <form method='post' action='/' className='location location__form'>
        <input 
          type='text' 
          className='location__form-input' 
          placeholder='Name' 
        />
        <input 
          type='email' 
          className='location__form-input' 
          placeholder='E-Mail' 
        />
        <textarea
          className='location__form-textarea'
          placeholder='Message'
        />
        <button className='third__content-link'>Отправить</button>
      </form>
    </div>
  </section>
}

export default compose(
  inject('sixthSection'),
  lifecycle({
    componentDidMount() {
      const { basicLoaded, basicFetch, loaded, fetch } = this.props.sixthSection
      if (!basicLoaded) basicFetch()
      if (!loaded) fetch()
    }
  }),
  observer,
)(SixthSection)