import { action, observable } from 'mobx'
import axios from 'axios'
import _ from 'lodash'

import { api } from '../configs'
import BasicStore from './BasicStore'

class SixthSection extends BasicStore {
  @observable title = ''
  @observable description = ''
  @observable address = ''
  @observable email = ''
  @observable data = {}
  @observable loaded = false
  @observable basicLoaded = false
  @observable error = false

  @action basicFetch = () => {
    axios.get(`${api}/section-6/`)
      .then(({ data }) => {
        this.basicLoaded = true
        this.title = _.get(data, 'results[0].title')
        this.description = _.get(data, 'results[0].description')
        this.address = _.get(data, 'results[0].address')
        this.email = _.get(data, 'results[0].email')
      })
      .catch(error => {
        console.log('ERROR', error)
      })
  }

  @action fetch = () => {
    axios.get(`${api}/phones/`)
      .then(({ data }) => {
        this.loaded = true
        this.data = _.get(data, 'results')
      })
      .catch(error => {
        console.log('ERROR', error)
        this.loaded = true
        this.error = error
      })
  }
}

export default SixthSection
