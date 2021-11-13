import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Home from './pages/Home';

import { createTheme, ThemeProvider } from '@mui/material';
import { GlobalProvider } from './context/GlobalStore';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    yellow: '#F0AE4B',
    blue: '#373C56',
    red: '#F0424C',
    sky: '#7BB4F8',
    green: '#2DD348',
    dark: '#272B3F',
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
  },
});

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/loggedin-users" component={Home} /> */}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
