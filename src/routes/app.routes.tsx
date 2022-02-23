import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from './Login';
import { Home } from './Home';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
