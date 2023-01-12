import "./styles.css";
import Navigation from "./components/Navigation";
import InfoBar from "./components/InfoBar";
import HeroPage from "./components/HeroPage";
import { Category } from "./components/Category";
import CardHomepage from "./components/CardHomepage";
import XboxDisplay from "./components/XboxDisplay";
import { ForBusiness } from "./components/ForBusiness";
import { NflAd } from "./components/NflAd";
import FollowMicrosoft from "./components/FollowMicrosoft";
import Footer from "./components/Footer";

function App() {
 
  return (
    <div className="App">
      <Navigation />
      <InfoBar />
      <HeroPage />
      <Category />
      <CardHomepage />
      <XboxDisplay />
      <ForBusiness />
      <NflAd />
      <FollowMicrosoft />
      <Footer />
    </div>
  );
}

export default App;
