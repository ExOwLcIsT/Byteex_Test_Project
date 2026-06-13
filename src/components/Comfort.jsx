import ComfortCard from "./Comfort/ComfortCard";
import "../Comfort.css";
import FiveStarReviews from "./FiveStarReviews";
const CARDS = [
  {
    id: 1,
    icon: "icons/shopping_cart.png",
    title: "You save.",
    text: "Browse our comfort sets and save 15% when you bundle.",
  },
  {
    id: 2,
    icon: "icons/truck.png",
    title: "We ship.",
    text: "We ship your items within 1-2 days of receiving your order.",
  },
  {
    id: 3,
    icon: "icons/day_night.png",
    title: "You enjoy!",
    text: "Wear hernest around the house, out on the town, or in bed.",
  },
];
export default function Comfort() {
  return (
    <div className="comfort">
      <div className="comfort-container">
        <div className="content-title">Comfort made easy</div>
        <div className="comfort-content">
          {CARDS.map((card) => {
            return (
              <ComfortCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                text={card.text}
              ></ComfortCard>
            );
          })}
        </div>
        <button className="cta-button" type="button">
          Customise Your Outfit
          <span className="cta-arrow" aria-hidden="true">
            →
          </span>
        </button>
        <FiveStarReviews></FiveStarReviews>
      </div>
    </div>
  );
}
