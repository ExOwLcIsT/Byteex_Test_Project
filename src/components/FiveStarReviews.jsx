export default function FiveStarReviews() {
  return (
    <>
      <span className="star-rating" aria-label={`5 out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={"star star--filled"}>
            ★
          </span>
        ))}
        <span className="reviewer-badge">One of 500+ 5 Star Reviews Online</span>
      </span>
    </>
  );
}
