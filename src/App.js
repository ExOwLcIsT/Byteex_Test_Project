import logo from "./LOGO.png";
import "./App.css";
import Announcement from "./components/Announcement";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="App">
      <Announcement></Announcement> 
       <img id="logo" src={logo} alt="BYTEEX" />
      <Hero></Hero>
    </div>
  );
}

export default App;
