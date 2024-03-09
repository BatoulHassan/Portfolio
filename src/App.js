import React from 'react'
import {CssBaseline} from '@material-ui/core';
import { ThemeProvider, createTheme, responsiveFontSizes} from '@material-ui/core/styles';
import HeroSection from './HeroSection/HeroSection.jsx';
import Header from './Header/Header.jsx';
import Projects from './Projects/Projects.jsx';
import Footer from './Footer/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Contact} from './Contact/Contact.jsx';

let darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});
let theme = createTheme();
darkTheme = responsiveFontSizes(darkTheme);
function App() {
  return (
      <ThemeProvider theme={darkTheme}>
       <Router>
         <CssBaseline/>
         <Header />
         <Routes>
           <Route exact path='/' element={<HeroSection />}></Route>
           <Route exact path='/projects' element={<Projects />}></Route>
           <Route exact path='/contacts' element={<Contact />}></Route>
         </Routes>
         <Footer />
       </Router>
     </ThemeProvider>
   
  )
}

export default App;

{/* <CssBaseline/>
<Header/>
<HeroSection />
<Projects />
<Footer /> */}