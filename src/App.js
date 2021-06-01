
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './estilos/custom.css'
import  Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
 import ProductList from './components/ProductList'
import Carousel from './components/Carousel';
import Footer from './components/Footer';
function App() {
  return (
  
    <Router>
       <Navbar/>
       <Carousel/>
       <Switch >
       <Route exact path='/' component={ProductList}/>
       
       </Switch>
       <Footer/>
     </Router>
  );
}


export default App;