import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose, lifecycle } from 'recompose'

const Gallery = ({ gallery: { data, loaded } }) => (
  <main className='main'>
    <div className='main__background' />
    <section className='common__section page'>
      <div className='container'>
        <h1 className='page__title'>Галлерея</h1>
        <div className='page__content'>
          {loaded && Object.values(data).map(({ src }) => (
            <div className='gallery__wrap'>
              <img src={src} alt='gallery-pic' />
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
)

export default compose(
  inject('gallery'),
  lifecycle({
    componentDidMount() {
      const { fetch, loaded } = this.props.gallery
      if (!loaded) fetch()
    }
  }),
  observer,
)(Gallery)
