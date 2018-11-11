import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose, lifecycle, withState, withHandlers } from 'recompose'

import Popup from '../Popup'

const Gallery = ({ 
  gallery: { data, loaded },
  active,
  src,
  handleClick,
  setActive,
}) => (
  <main className='main'>
    {active && (
      <Popup 
        active={active} 
        src={src}
        handleClick={setActive} 
      />
    )}
    <div className='main__background' />
    <section className='common__section page'>
      <div className='container'>
        <h1 className='page__title'>Галлерея</h1>
        <div className='page__content'>
          <ul className='gallery__wrap'>
            {loaded && Object.values(data).map(({ src }, idx) => (
              <li 
                key={idx} 
                onClick={() => handleClick(src)}
                className='gallery__item'
              >
                <img src={src} alt='gallery-pic' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </main>
)

export default compose(
  inject('gallery'),
  withState('src', 'setSource', null),
  withState('active', 'setActive', false),
  withHandlers({
    handleClick: ({ 
      setSource,
      setActive,
    }) => (source) => {
      setActive(true)
      setSource(source)
    }
  }),
  lifecycle({
    componentDidMount() {
      const { fetch, loaded } = this.props.gallery
      if (!loaded) fetch()
    }
  }),
  observer,
)(Gallery)
