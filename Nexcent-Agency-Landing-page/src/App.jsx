import "./App.css";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  return (
    <>
      <div className=" mx-auto">
        <Navbar />
        <Home />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
