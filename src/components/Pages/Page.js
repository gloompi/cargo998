import React, { Fragment } from 'react'
import _ from 'lodash'
import { inject, observer } from 'mobx-react'
import { compose, withHandlers } from 'recompose'

import { createMarkup } from '../../helpers'

const Page = ({ getNode }) => (
  <Fragment>
    <h1 className='page__title'>{getNode('title')}</h1>
    <div 
      className='page__content'
      dangerouslySetInnerHTML={createMarkup(getNode('content'))}
    />
  </Fragment>
)

export default compose(
  inject('pages'),
  withHandlers({
    getNode: ({ 
      match: {
        params: {
          pageId,
        }
      }, 
      pages: {
        data,
      },
    }) => (node) => _.get(_.find(data, ['slug', pageId]), node),
  }),
  observer,
)(Page)
