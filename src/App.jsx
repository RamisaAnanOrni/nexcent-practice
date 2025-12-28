import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
function App() {
 

  return (
    <>
    <Navbar/>
    <main className='min-h-screen'>
    <Outlet/>
    </main>
    <footer>Footer</footer>
    </>
  )
}

export default App
