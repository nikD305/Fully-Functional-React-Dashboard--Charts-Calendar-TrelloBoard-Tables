import React from 'react'
import { BrowserRouter,Route , Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard/Dashboard'
import Calender from './pages/Dashboard/Calender/Calender'


import BoardPage from './components/Board/BoardPage'
import DataGrid from './pages/Dashboard/DataGrid/DataGrid'
const App = () => {
  return (
    <div id="dashboard">
<BrowserRouter>
<Routes>
 <Route path='/' element={<Layout/>}>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='calender' element={<Calender/>}/>
    <Route path='board' element={<BoardPage/>}/>
    <Route path='users' element={<DataGrid/>}/>
 </Route>

</Routes>

</BrowserRouter>

    </div>
  )
}

export default App