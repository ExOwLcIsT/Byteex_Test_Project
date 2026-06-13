import logo from "./LOGO.png";
import "./App.css";
import Announcement from "./components/Announcement";
import Hero from "./components/Hero";
import TopBenefits from "./components/TopBenefits";
import Founder from "./components/Founder";
function App() {
  return (
    <div className="App">
      <Announcement></Announcement>
      <img id="logo" src={logo} alt="BYTEEX" />
      <Hero></Hero>
      <TopBenefits></TopBenefits>
      <Founder></Founder>
    </div>
  );
}

export default App;
