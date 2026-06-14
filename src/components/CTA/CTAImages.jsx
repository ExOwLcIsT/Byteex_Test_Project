import PseudoCarousel from "../utils/PseudoCarousel";

export default function CTAImages() {
  return (
    <div className="cta-images-container">
      <PseudoCarousel
        first={"/images/CTA/CTA_left.png"}
        second={"/images/CTA/main.png"}
        third={"/images/CTA/CTA_right.png"}
      />
    </div>
  );
}
