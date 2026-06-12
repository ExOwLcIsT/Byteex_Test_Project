import HeroContent from "./Hero/HeroContent";
import HeroImages from "./Hero/HeroImages";
import "../Hero.css";
/**
 HERO section 
 **/
export default function Hero() {
  return (
    <div className="hero">
      <HeroContent></HeroContent>
      <HeroImages></HeroImages>
    </div>
  );
}
