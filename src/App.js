import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import TextForm from './components/textform';

function App() {
  return (
    <><Navbar title = "Simple React Props ans State Project" />
    <div className='container'>
    <TextForm/>
    
    </div>
    <div className='container '></div>
    <Footer></Footer> 
    </>
  );
}

export default App;
