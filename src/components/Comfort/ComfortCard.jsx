export default function ComfortCard({ icon, title, text }) {
  return (
    <div className="comfort-card">
      <img className="comfort-card-icon" src={icon} alt="" />
      <div className="comfort-card-title">{title}</div>
      <div className="comfort-card-text">{text}</div>
    </div>
  );
}
