export default function HeroPhotos() {
  return (
    <div className="photos-grid">
      <div className="photo-slot photo-third photo-left"></div>
      <div className="photo-slot photo-second photo-left">
        <img src="/images/Hero_left.png" alt="" className="photo-img" />
      </div>
      <div className="photo-slot photo-first">
        <img src="/images/Hero_main.png" alt="" className="photo-img" />
      </div>
      <div className="photo-slot photo-second photo-right">
        <img src="/images/Hero_right.png" alt="" className="photo-img" />
      </div>
      <div className="photo-slot photo-third photo-right"></div>
    </div>
  );
}
