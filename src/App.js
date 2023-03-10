import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/textform';

function App() {
  return (
    <><Navbar title = "Baggy" />
    <div className='container'>
    <TextForm/>
    </div></>
  );
}

export default App;
