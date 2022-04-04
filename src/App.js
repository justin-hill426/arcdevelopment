import Header from './components/ui/Header';
import { ThemeProvider } from '@mui/material';
import theme from './components/ui/Theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
          </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
