import FiveStarReviews from "../FiveStarReviews";

const REVIEW = {
  name: "Amy P.",
  avatar: "/images/amy-avatar.png",
  initials: "AP",
  text: "Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them. ",
};

export default function ReviewCard({ review = REVIEW }) {
  return (
    <div className="review-card">
      <div className="review-header">
        {review.avatar ? (
          <img
            src={review.avatar}
            alt={review.name}
            className="reviewer-avatar"
          />
        ) : (
          <div className="reviewer-initials" aria-hidden="true">
            {review.initials}
          </div>
        )}
        <div className="reviewer-meta">
          <div className="reviewer-top">
            <span className="reviewer-name">{review.name}</span>
            <FiveStarReviews></FiveStarReviews>
          </div>
        </div>
      </div>
      <p className="review-text">{review.text}</p>
    </div>
  );
}
