import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import QRCode from './Component/QRCode';
import Switch from '@mui/material/Switch';
import './Component/style.css';
import { useEffect } from 'react';

function App() {

  // use the localStorage API to store the data after refresh webpage
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const toggleTheme = () =>{
    if(theme === 'light'){
      setTheme('dark');
    }else{
      setTheme('light');
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.className = theme;
  }, [theme])
  
  return (
    <>
        <div className={`toggle ${theme}`}>
          <Switch onClick={toggleTheme} color='black'/>
          change theme
          <QRCode />
        </div>
    </>

  )
}

export default App;
