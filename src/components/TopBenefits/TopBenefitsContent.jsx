const FEATURES = [
  {
    id: 1,
    icon: "/icons/shopping_cart.png",
    title: "Ethically sourced.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. ",
  },
  {
    id: 2,
    icon: "/icons/leaf.png",
    title: "Responsibly made.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. ",
  },
  {
    id: 3,
    icon: "/icons/day_night.png",
    title: "Made for living in.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. ",
  },
  {
    id: 4,
    icon: "/icons/waves.png",
    title: "Unimaginably comfortable.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. ",
  },
];

export default function TopBenefitsContent() {
  return (
    <div className="top-benefits-content content">
      <div className="content-title">Loungewear you can be proud of.</div>
      <ul className="feature-list">
        {FEATURES.map((f) => (
          <li key={f.id} className="feature-item">
            <img
              className="feature-icon"
              aria-hidden="true"
              src={f.icon}
              alt=""
            />
            <div className="feature-text-box">
              <h2 className="feature-title">{f.title}</h2>
              <span className="feature-text">{f.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
