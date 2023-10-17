import './App.css'
import AppRouter from './AppRouter'
import Footer from './components/Footer'
import Topbar from './components/Topbar'

import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Topbar/>
      <AppRouter/>
      <Footer/>
    </Router>
  )
}

export default App
