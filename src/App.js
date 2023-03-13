import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import TextForm from './components/textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import About from './components/about';
function App() {
  return (
    <><Navbar title = "Simple React Props ans State Project" />
    <div className='container'>
    <Router>
    <Routes>
    <Route exact path="/" element={<TextForm></TextForm>} />
    <Route exact path="/about" element={<About></About>} />
        </Routes>
    </Router>
    </div>
    <div className='container '></div>
    <Footer></Footer> 
    </>
  );
}

export default App;
