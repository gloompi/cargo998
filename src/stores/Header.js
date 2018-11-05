import { action, observable } from 'mobx'
import axios from 'axios'
import _ from 'lodash'

import BasicStore from './BasicStore'

class Header extends BasicStore {
  @observable logo = null
  @observable loaded = false
  @observable error = false

  @action fetch = () => {
    axios.get('http://localhost:8000/api/v0/header/')
      .then(({ data }) => {
        this.loaded = true
        this.logo = _.get(data, 'results[0].logo')
      })
      .catch(error => {
        this.loaded = true
        this.error = error
      })
  }
}

export default Header
