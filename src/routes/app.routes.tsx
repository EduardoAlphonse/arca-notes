import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from './Login';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
