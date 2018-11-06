import { action, observable } from 'mobx'
import axios from 'axios'
import _ from 'lodash'

import { api } from '../configs'
import BasicStore from './BasicStore'

class ThirdSection extends BasicStore {
  @observable title = ''
  @observable descr = ''
  @observable data = {}
  @observable loaded = false
  @observable basicLoaded = false
  @observable error = false

  @action basicFetch = () => {
    axios.get(`${api}/section-5/`)
      .then(({ data }) => {
        this.basicLoaded = true
        this.title = _.get(data, 'results[0].title')
        this.descr = _.get(data, 'results[0].descr')
      })
      .catch(error => {
        console.log('ERROR', error)
      })
  }

  @action fetch = () => {
    axios.get(`${api}/partners/`)
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

export default ThirdSection
