// import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import {useState} from 'react';



function App() {
  const [setMyBtn, setMyUpdateBtn]=useState('light'); // change the state of color
  const [alert, setAlert] = useState(null);

  const showAlert =(massage, type)=>{
    setAlert({
      msg:massage,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

const colorCode =()=>{
    if(setMyBtn === 'dark'){
        setMyUpdateBtn('light');
        document.body.style.backgroundColor = "white";
        showAlert('Light mode enable','warning ')
      
    }
    else{
        setMyUpdateBtn('dark');
        document.body.style.backgroundColor= "#323232";
        showAlert('Dark mode enable','success ')
       
    }
  }







  return (
    <>
    
   <Navbar lidde="--bs-scroll-height:100%" colorBody={setMyBtn} toggleMode={colorCode}  />
  <Alert alert={alert}/>
   <Textarea colorBody={setMyBtn} setAlert={showAlert}/>

    </>
  );
}

export default App;
