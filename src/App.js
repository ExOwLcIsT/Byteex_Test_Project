import logo from "./LOGO.png";
import "./App.css";
import Announcement from "./components/Announcement";
import Hero from "./components/Hero";
import TopBenefits from "./components/TopBenefits";
function App() {
  return (
    <div className="App">
      <Announcement></Announcement>
      <img id="logo" src={logo} alt="BYTEEX" />
      <Hero></Hero>
      <TopBenefits></TopBenefits>
    </div>
  );
}

export default App;
