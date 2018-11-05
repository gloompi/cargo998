import { action, observable } from 'mobx'
import axios from 'axios'
import _ from 'lodash'

import BasicStore from './BasicStore'

class SecondSection extends BasicStore {
  @observable data = {}
  @observable loaded = false
  @observable error = false

  @action fetch = () => {
    axios.get('http://localhost:8000/api/v0/section-2/')
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

export default SecondSection
