import Carousel from "react-multi-carousel";
import ReviewCard from "./ReviewCard";
import "react-multi-carousel/lib/styles.css";

const TOP_COMMENTS = [
  {
    id: 1,
    avatar: "/images/review-avatar.png",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
  },
  {
    id: 2,
    avatar: "/images/review-avatar.png",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.",
  },
  {
    id: 3,
    avatar: "/images/review-avatar.png",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
  },
  {
    id: 4,
    avatar: "/images/review-avatar.png",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
  },
  {
    id: 5,
    avatar: "/images/review-avatar.png",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.",
  },
  {
    id: 6,
    avatar: "/images/review-avatar.png",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function ReviewCarousel() {
  return (
    <div className="community-carousel">
      <Carousel responsive={responsive} infinite={true} renderButtonGroupOutside={true}>
        {TOP_COMMENTS.map((comment) => {
          return (
            <ReviewCard
              key={comment.id}
              avatar={comment.avatar}
              text={comment.text}
              rating={comment.rating}
            ></ReviewCard>
          );
        })}
      </Carousel>
    </div>
  );
}
