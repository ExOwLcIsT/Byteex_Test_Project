import "../../PseudoCarousel.css";
export default function PseudoCarousel({first, second, third}) {
  return (
    <div className="photos-grid">
      <div className="photo-slot photo-third photo-left"></div>
      <div className="photo-slot photo-second photo-left">
        <img src={first} alt="" className="photo-img" />
      </div>
      <div className="photo-slot photo-first">
        <img src={second} alt="" className="photo-img" />
      </div>
      <div className="photo-slot photo-second photo-right">
        <img src={third} alt="" className="photo-img" />
      </div>
      <div className="photo-slot photo-third photo-right"></div>
    </div>
  );
}
