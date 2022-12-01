import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from './pages/landingPage/landingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, ColorModeProvider, extendTheme, ColorModeScript, ThemeProvider } from "@chakra-ui/react"

const extenedChakra = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
}
const theme = extendTheme(extenedChakra)
console.log(theme.config.initialColorMode)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <ChakraProvider>
      <ColorModeProvider>
        <Routes>
          <Route exact path='/' element={<LandingPage />}/>
        </Routes>
      </ColorModeProvider>
    </ChakraProvider>
  </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
