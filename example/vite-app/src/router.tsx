import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';
import { LoginPage } from './pages/login';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
