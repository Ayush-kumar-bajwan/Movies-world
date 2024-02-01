import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import App from './App.jsx'
import { Page } from './Pages/page1/Page.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/buy' element = {<Page/>}></Route>
    </Routes>
  </Router>
  
)
