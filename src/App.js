import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
    const { t, i18n } = useTranslation(['common', 'app']);
    const [lang, setLang] = useState('ja');
    
    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang, i18n]);
    
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <div>{t('HelloWorld')}</div>
            <div>{t('Name', { ns: 'app'})}</div>
            <button onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}>
              Change Lang
            </button>
          </header>
        </div>
    );
}

export default App;
