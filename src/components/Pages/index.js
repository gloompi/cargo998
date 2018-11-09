import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { compose } from 'recompose'

import './style.scss'
import Page from './Page'

const Pages = ({ pages: { loaded, data } }) => (
  <main className='main'>
    <div className='main__background' />
    <section className='common__section page'>
      <div className='container'>
        <Switch>
          {loaded && Object.values(data).map((props, idx) => (
            <Route key={idx} path={`/pages/:pageId`} component={Page} />
          ))}
        </Switch>
      </div>
    </section>
  </main>
)

export default compose(
  inject('pages'),
  observer,
)(Pages)
