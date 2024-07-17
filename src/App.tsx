import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/index.component'
import Products from './components/Products/index.component'

function App() {
  return (
    <>
      <p className='text-3xl font-bold'>This is react ts app with vite</p>
      <Routes>
        <Route path='/' element={<Home data={{name: 'Bob', age: 10}}/>}/>
        <Route path='/product' element={<Products />}/>
      </Routes>
    </>
  )
}

export default App
