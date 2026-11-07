import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import NotesPage from './pages/NotesPage.jsx'

export default function App() {
  return (
    <HashRouter>
      <nav style={{ display: 'flex', gap: 16, padding: 16, fontFamily: 'system-ui, sans-serif' }}>
        <Link to="/">Home</Link>
        <Link to="/notes">Notes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
    </HashRouter>
  )
}
