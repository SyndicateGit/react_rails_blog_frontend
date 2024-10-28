import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import AppRoutes from './components/AppRoutes'
function App() {

  return (
    <Router>
      <div>
        <h1>React on Rails Blog</h1>
        <p>Find this application layout in /src/App.jsx</p>
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
