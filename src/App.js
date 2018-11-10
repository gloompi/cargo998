import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { ParallaxProvider } from 'react-scroll-parallax'

import './styles/normalize.css'
import './App.scss'

import stores from './stores'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Pages from './components/Pages'
import Contacts from './components/Pages/Contacts'
import Gallery from './components/Pages/Gallery'

class App extends Component {
  render() {
    return (
      <Router>
        <Provider {...stores}>
          <ParallaxProvider>
            <div className='App'>
              <Header />
              <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/pages' component={Pages} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/gallery' component={Gallery} />
              </Switch>
              <Footer />
            </div>
          </ParallaxProvider>
        </Provider>
      </Router>
    )
  }
}

export default App
