import { action, observable } from 'mobx'
import axios from 'axios'
import _ from 'lodash'

import { api } from '../configs'
import BasicStore from './BasicStore'

class ThirdSection extends BasicStore {
  @observable data = {}
  @observable loaded = false
  @observable error = false

  @action fetch = () => {
    axios.get(`${api}/section-4/`)
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
