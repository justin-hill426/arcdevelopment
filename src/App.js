import Header from './components/ui/Header';
import { ThemeProvider } from '@mui/material';
import theme from './components/ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      Hello
    </ThemeProvider>
  );
}

export default App;
