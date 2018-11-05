import { action, observable } from 'mobx'
import axios from 'axios'
import _ from 'lodash'

import BasicStore from './BasicStore'

class FirstSection extends BasicStore {
  @observable data = {}
  @observable loaded = false
  @observable error = false

  @action fetch = () => {
    axios.get('http://localhost:8000/api/v0/section-1/')
      .then(({ data }) => {
        this.loaded = true
        this.data = _.get(data, 'results[0]')
      })
      .catch(error => {
        this.loaded = true
        this.error = error
      })
  }
}

export default FirstSection
