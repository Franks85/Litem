import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'
import requireLogin from './hoc/require_auth'
import './App.css'

// Public components
import Header from './components/publicComponents/Header/Header'
import Footer from './components/publicComponents/Footer/Footer'
import Landing from './components/publicComponents/Landing/Landing'
import SearchService from './components/publicComponents/SearchService/SearchService'
import SearchBar from './components/publicComponents/SearchBar/SearchBar'

// Admin components
import Login from './components/Auth/login'
import Signup from './components/Auth/signup'
import Dashboard from './components/AdminComponents/Dashboard/Dashboard'
import DataEntry from './components/AdminComponents/Dashboard/DataEntry/DataEntry'
import ItemDetail from './components/AdminComponents/Dashboard/ItemDetail/ItemDetail'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <main className='app'>
              <Route path="/" exact component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/service" component={SearchService} />
              <Route path="/search" component={SearchBar} />
              <Route
                path="/dashboard"
                exact
                component={requireLogin(Dashboard)}
              />
              <Route
                path="/dashboard/dataEntry"
                component={requireLogin(DataEntry)}
              />
              <Route
                path="/dashboard/detail"
                component={requireLogin(ItemDetail)}
              />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
