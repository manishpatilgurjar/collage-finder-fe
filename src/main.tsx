import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import CollegeDetailPage from './pages/CollegeDetailPage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/college/:slug" element={<CollegeDetailPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
