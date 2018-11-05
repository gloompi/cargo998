import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { ParallaxProvider } from 'react-scroll-parallax'

import stores from './stores'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import './styles/normalize.css'
import './App.scss'

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
                <Route path='/about' render={() => <h1>About</h1>} />
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
