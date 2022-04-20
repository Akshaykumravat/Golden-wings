import React from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import Login from './components/Login.js'
import SignUp from './components/SignUp'
import Error from './components/Error'
import Book from './components/Book'
import RecordList from './components/ShowTicket'
import Change from './components/Change'

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Showcase />
          <Destinations />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/showcase'>
          <Showcase />
          <Destinations />
        </Route>
        <Route path='/show'>
          <RecordList />
        </Route>
        <Route path='/signup'>
          <SignUp />
         </Route>
        <Route path='/book'>
          <Book />
        </Route>
        <Route path='/change'>
          <Change />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
