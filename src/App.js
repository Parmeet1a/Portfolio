import './App.scss'

import {Header,About,Work,Skills,Testimonial,Footer} from './container'
import {Routes,Route} from 'react-router-dom'
import {Navbar} from './components';


function App() {
  return (
    <div className="app">


      <Routes>

      <Route path="/" element={<Navbar/>} />
      <Route path="/home" element={<Header/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/work" element={<Work/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/contact" element={<Footer/>} />

      </Routes>
  
      
    </div>
  );
}

export default App;