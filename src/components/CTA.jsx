import CTAImages from "./CTA/CTAImages";
import "../CTA.css";
const FOOTER_CARDS = [
  {
    id: 1,
    icon: "icons/footer_truck.png",
    text: "FREE Shipping on Orders over $200",
  },
  {
    id: 2,
    icon: "icons/footer_shield.png",
    text: "Over 500+ 5 Star Reviews Online",
  },
  {
    id: 3,
    icon: "icons/footer_shopping_cart.png",
    text: "Made ethicallyand responsibly.",
  },
];
export default function CTA() {
  return (
    <div className="cta">
      <div className="content-title">Find something you love.</div>
      <div className="content-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat.
      </div>
      <CTAImages />
      <button className="cta-button" type="button">
        Customize Your Outfit
        <span className="cta-arrow" aria-hidden="true">
          →
        </span>
      </button>
      <img
        className="shipment-and-payment"
        src="/images/CTA/shipment_and_payment.png"
        alt=""
      ></img>

      <div className="footer-cards">
        {FOOTER_CARDS.map((card) => {
          return (
            <div className="footer-card" key={card.id}>
              <img src={card.icon} alt=""></img>
              <div className="footer-card-text">{card.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
