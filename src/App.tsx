import { AppContainer } from './AppStyles';
import { Router } from './routes/app.routes';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Router />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
