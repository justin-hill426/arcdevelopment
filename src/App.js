import Header from './components/ui/Header';
import { ThemeProvider } from '@mui/material';
import theme from './components/ui/Theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import Home from './components/Home';
import Footer from './components/ui/Footer';
import { useState } from 'react';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0);

  return (
    <Router>
      <ThemeProvider theme={theme}>
          <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
          </Routes>
          <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </ThemeProvider>
    </Router>
  );
}

export default App;
