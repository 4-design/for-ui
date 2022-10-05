import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages'
import { LoginPage } from './pages/login'
import { MapPage } from './pages/map'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
};
