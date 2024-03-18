import Navbar from './components/Navbar';
import GetStarted from './components/GetStarted';
import Contact from './components/Contact';
import About from './components/About';
import Form from './components/MyForm';
import Card from './components/Card';
import Table from './components/Table';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import './App.css'
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';


function App() {
  

  return (
    <> 
    <Main>
    <div className="App">
      <Navbar/>
      <Routes>
      
        <Route exact path='/' element={<GetStarted/>} />
        <Route exact path='/' element={<Card/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/form' element={<Form/>}/>
        <Route exact path='/table' element={<Table/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/SignUp' element={<SignUp/>}/>
        <Route exact path='*' element={<ErrorPage/>}/>
        
      </Routes>
      {/* <Card/> */}
      <Footer/>
    </div>
    </Main>
    </>
  )
}

export default App
