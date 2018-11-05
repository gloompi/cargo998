import React, { Fragment } from 'react'
import _ from 'lodash'
import { inject, observer } from 'mobx-react'
import { withState, withHandlers, lifecycle, compose } from 'recompose'

import Loader from '../../Loader'
import Tabs from './Tabs'
import Content from './Content'

const Third = ({ 
  thirdSection: {
    data,
    loaded
  },
  setActive,
  active,
  getActiveData,
}) => (
  <section className='section section__third'>
    {loaded
      ? <Fragment>
          <div className='third__header'>
            <div className='container'>
              <Tabs
                list={Object.values(data)}
                setActive={setActive}
                active={active}
              />
            </div>
          </div>
          <Content data={getActiveData()} />
        </Fragment>
      : <Loader />
    }
  </section>
)

export default compose(
  inject('thirdSection'),
  withState('active', 'setActive', 'trucking'),
  lifecycle({
    componentDidMount() {
      const { loaded, fetch } = this.props.thirdSection
      if (!loaded) fetch()
    }
  }),
  withHandlers({
    getActiveData: ({ active, thirdSection }) => () => {
      const { data } = thirdSection
      return {..._.find(Object.values(data), { slug: active })}
    }
  }),
  observer,
)(Third)