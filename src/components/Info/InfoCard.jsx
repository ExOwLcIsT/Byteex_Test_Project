export default function InfoCard({ icon, title, text }) {
  return (
    <div className="info-card">
      <img src={icon} alt="" />
      <div className="info-card-title">{title}</div>
      <div className="info-card-text">{text}</div>
    </div>
  );
}
