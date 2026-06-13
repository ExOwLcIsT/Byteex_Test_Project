const IMAGES = [
  "/images/gallery/1.png",
  "/images/gallery/2.png",
  "/images/gallery/3.png",
  "/images/gallery/4.png",
  "/images/gallery/5.png",
  "/images/gallery/6.png",
  "/images/gallery/7.png",
  "/images/gallery/8.png",
  "/images/gallery/9.png",
  "/images/gallery/10.png",
  "/images/gallery/11.png",
  "/images/gallery/12.png",
  "/images/gallery/13.png",
  "/images/gallery/14.png",
  "/images/gallery/15.png",
  "/images/gallery/16.png",
  "/images/gallery/17.png",
  "/images/gallery/18.png",
  "/images/gallery/19.png",
  "/images/gallery/20.png",
  "/images/gallery/21.png",
  "/images/gallery/22.png",
];
export default function CommunityGallery() {
  return (
    <>
      <div className="community-gallery">
        {IMAGES.map((src, i) => (
          <div key={i} className="gallery-item">
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
