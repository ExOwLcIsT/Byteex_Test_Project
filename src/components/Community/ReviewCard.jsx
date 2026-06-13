function StarRating({ count }) {
  return (
    <span className="star-rating">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "star star--filled" : "star"}>
          ★
        </span>
      ))}
    </span>
  );
}
export default function ReviewCard({ avatar, text, rating }) {
  return (
    <div className="review-carousel-card">
      <div className="review-carousel-header">
        <img src={avatar} alt="" className="review-carousel-avatar" />
        <div className="review-carousel-meta">
          <StarRating count={rating} />
          <span className="review-carousel-name">Jane, S.</span>
        </div>
      </div>
      <p className="review-carousel-text">{text}</p>
    </div>
  );
}
