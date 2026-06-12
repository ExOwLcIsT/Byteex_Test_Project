const FEATURES = [
  {
    id: 1,
    icon: "/icons/icon1.png",
    text: "Beautiful, comfortable loungewear for day or night.",
  },
  {
    id: 2,
    icon: "/icons/icon2.png",
    text: "No wasteful extras, like tags or plastic packaging.",
  },
  {
    id: 3,
    icon: "/icons/icon3.png",
    text: "Our signature fabric is incredibly comfortable — unlike anything you've ever felt.",
  },
];

export default function HeroContent() {
  return (
    <div className="hero-content">
      <h1 className="hero-title">Don't apologize for being comfortable.</h1>

      <ul className="feature-list">
        {FEATURES.map((f) => (
          <li key={f.id} className="feature-item">
            <img
              className="feature-icon"
              aria-hidden="true"
              src={f.icon}
              alt=""
            />
            <span className="feature-text">{f.text}</span>
          </li>
        ))}
      </ul>

      <button className="cta-button" type="button">
        Customize Your Outfit
        <span className="cta-arrow" aria-hidden="true">
          →
        </span>
      </button>
    </div>
  );
}
