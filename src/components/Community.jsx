import CommunityGallery from "./Community/CommunityGallery";
import "../Community.css";
import ReviewCarousel from "./Community/ReviewCarousel";
import FiveStarReviews from "./FiveStarReviews";
export default function Community() {
  return (
    <>
      <div className="community">
        <div className="community-content-title">What are our fans saying?</div>
        <div className="community-content-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat. Fusce non nibh luctus.
        </div>
        <CommunityGallery />
        <ReviewCarousel />
        <button className="cta-button" type="button">
          Customise Your Outfit
          <span className="cta-arrow" aria-hidden="true">
            →
          </span>
        </button>
        <FiveStarReviews></FiveStarReviews>
      </div>
    </>
  );
}
