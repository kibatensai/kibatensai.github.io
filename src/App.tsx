import React, { useState } from 'react';
import './App.css';
import { Contacts } from './Contacts/Contacts';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Projects } from './Projects/Projects';
import { Skills } from './Skills/Skills';
import { Snackbar } from './common/components/snackbar/Snackbar'
import { Preloader } from './common/components/preloader/Preloader';

function App() {

  const [snackbarShow, onSnackBarShow] = useState(false)
  const [preloaderShow, onPreloaderShow] = useState(false)

  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contacts onSnackBarShow={onSnackBarShow} onPreloaderShow={onPreloaderShow} />
      <Footer />
      { snackbarShow
        &&
        //@ts-ignore
        <Snackbar title={'Thanks for reaching out! Your message has been sent successfully'} timer={2950} />
      }
      { preloaderShow
        &&
        <Preloader />
      }
    </div>
  );
}

export default App;
