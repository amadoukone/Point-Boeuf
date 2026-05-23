/**
 * File: src/App.tsx
 * Purpose: Main router configuration for the application.
 */

import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home'
import BaqaraPage from './pages/Baqara'
import './global.css'

/**
 * App
 * Application root with routes registered. HashRouter is used for SPA navigation.
 *
 * @returns JSX.Element
 */
export default function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/baqara" element={<BaqaraPage />} />
      </Routes>
    </HashRouter>
  )
}