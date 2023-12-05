import "./App.css";
import Home from "./Components/Navbar/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className=" mx-auto">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
