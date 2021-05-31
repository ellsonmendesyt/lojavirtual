
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './estilos/custom.css'
import  Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
  
     <Router>
    
         <Route exact path='/' component={Navbar}/>
       <Switch >
      
       </Switch>
       
     </Router>
  );
}


export default App;