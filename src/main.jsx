import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const divElement = React.createElement("div", {
//   id: "title", className: "tieu de", style: {backgroundColor: "red"}
// },
// React.createElement("h1", {className: "title"}, "hello ca lop"))

  

// dùng cú pháp của jsx
// const div2Element = <div id='container' className='tieuDe' style={{backgroundColor : "red"}}>
//   <h1 className='container' >Hello body</h1>
//   <p className='description'>MO ta chinh cua trang</p>
// </div>

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />
  </StrictMode>

)
