import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import 'materialize-css'
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { authContext } from './context/authContext';
// import router from '../../routes/todo.routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faTimes)

function App() {
  const {userId, login, logout} = useAuth()
  const isAuthenticated = !!userId
  const routes = useRoutes(isAuthenticated)
  return (
    <authContext.Provider value={{userId, login, logout, isAuthenticated}}>
      <Router>
        <div className="container">
          {routes}
        </div>
      </Router>
    </authContext.Provider>
  );
}

export default App;
