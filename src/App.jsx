import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import ProjectDetails from '@/pages/ProjectDetails'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  )
}