import './App.css';
import './App.js';
import  './Menu.js';
import { Menu } from './Menu.js';
import {Body} from './Body.js';



function App(){
    return(
        <div>
        <div className="header">
        <center><h1>My First React Application</h1></center>
        <Menu/>
        <Body/>
       
        </div>
      
        </div>
     
    );
}

export default App;