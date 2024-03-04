import { Link, Routes,Route } from "react-router-dom";
import "./App.css";
import FormPage from "./components/FormPage";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">

<Link to='/Home' style={{marginRight:"50px"}}>Home</Link>
<Link to='/'>Form</Link>


      <Routes>

        <Route path="/" element={<FormPage />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      {/* <FormPage /> */}
    </div>
  );
}

export default App;
