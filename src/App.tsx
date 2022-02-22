import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { AppContainer } from './AppStyles';
import { Router } from './routes/app.routes';

function App() {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
}

export default App;
