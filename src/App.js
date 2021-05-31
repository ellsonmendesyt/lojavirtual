
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './estilos/custom.css'
import  Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home'

function App() {
  return (
  
    <Router>
       <Navbar/>
       <Switch >
       <Route exact path='/' component={Home}/>
       </Switch>
       
     </Router>
  );
}


export default App;