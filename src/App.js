import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import TextForm from "./components/textform";
// import {
//   Routes,
//   Route,
//   BrowserRouter
// } from "react-router-dom";

function App() {
  return (
    
    <div>
      <Navbar title="Simple React Props ans State Project" />
      <div className="container">
      <TextForm></TextForm>
        {/* <Routes>
          <Route exact path="/" element={<TextForm />} />
          <Route exact path="about" element={<About />} />
        </Routes> */}
        
      </div>
      <div className="container "></div>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
