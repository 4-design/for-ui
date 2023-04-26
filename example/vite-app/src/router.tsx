import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/index'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};
