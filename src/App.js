import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Repositories from "./pages/Repositories";
import Favorites from "./pages/Favorites";
import About from "./components/About"
  
function App() { 
  
  return (
    <Router>
    <div className='container'>
      <Header/>
      <Route path='/' exact component={Repositories}/>
      <Route path='/favorites' component={Favorites} />
      <Route path='/about' component={About} />
      <Footer />
    </div>
  </Router>
  );
}

export default App;
