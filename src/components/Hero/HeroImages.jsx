import PseudoCarousel from "../utils/PseudoCarousel";

export default function HeroPhotos() {
  return (
    <div className="hero-images">
      <PseudoCarousel
        first={"/images/Hero_left.png"}
        second={"/images/Hero_main.png"}
        third={"/images/Hero_right.png"}
      />
    </div>
  );
}
