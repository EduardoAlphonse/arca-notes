import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from './Login';
import { Home } from './Home';
import { Client } from './Client';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<Home />} />
        <Route path="/app/client/:clientId" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
}
