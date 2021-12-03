import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Card from './components/Card'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path='/'     element= {<LandingPage/>}/>
        <Route path='/home' element= {<Home/>}/>
        {/* <Route path='/home' element= {<Card/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
