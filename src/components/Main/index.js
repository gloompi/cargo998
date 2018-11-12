import React from 'react'

import './style.scss'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Sixth from './Sixth'
import Services from './Services'

export default () => {
  return (
    <main className='main'>
      <div className='main__background' />
      <First />
      <Second />
      <Services />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
    </main>
  )
}
