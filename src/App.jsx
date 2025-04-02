
import styles from './App.module.css'
import Landing from "./pages/Landing/Landing"
import AboutMe  from './pages/About/AboutMe'
import Experience from './pages/Experience/Experience'
import {Navbar} from "./componets/Navbar/Navbar"
import Education from './pages/Education/Education'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className={styles.App}> 
    <Router>
    <Navbar/> 
    <Routes>
    {<Route path = "/" element={<Landing />}/>}
    <Route path="/aboutMe" element={<AboutMe/>}/>
    <Route path="/experience" element={<Experience/>}/>
    <Route path="/education" element={<Education/>}/>
    </Routes>
    </Router>
    
    
    </div>
  )
}

export default App
