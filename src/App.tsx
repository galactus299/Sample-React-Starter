
import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next'
import SwitchRoutes from "./router/routes";
import {BrowserRouter} from "react-router-dom";
import { LangContextProvider } from './context/language-context';
function App() {
    const { t } = useTranslation()
  return (
    <LangContextProvider>
      <BrowserRouter>
      <SwitchRoutes/>
      </BrowserRouter>
      </LangContextProvider>
  );
}

export default App;