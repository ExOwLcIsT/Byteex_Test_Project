import AsSeenIn from "./TopBenefits/AsSeenIn";
import TopBenefitsContent from "./TopBenefits/TopBenefitsContent";
import TopBenefitsCarousel from "./TopBenefits/TopBenefitsCarousel";
import "../TopBenefits.css";
export default function TopBenefits() {
  return (
    <div className="top-benefits">
      <AsSeenIn></AsSeenIn>
      <div className="top-benefits-container">
        <TopBenefitsContent></TopBenefitsContent>
        <TopBenefitsCarousel></TopBenefitsCarousel>
      </div>
    </div>
  );
}
