import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const IMAGES = [
  {
    id: 1,
    src: "/images/Carousel_Image2.png",
    description: "Gray Robe",
  },
  {
    id: 2,
    src: "/images/Carousel_Image1.png",
    description: "White Robe",
  },
  {
    id: 3,
    src: "/images/Carousel_Image2.png",
    description: "Gray Robe",
  },
  {
    id: 4,
    src: "/images/Carousel_Image2.png",
    description: "Gray Robe",
  },
  {
    id: 5,
    src: "/images/Carousel_Image2.png",
    description: "Gray Robe",
  },
  {
    id: 6,
    src: "/images/Carousel_Image2.png",
    description: "Gray Robe",
  },
  {
    id: 7,
    src: "/images/Carousel_Image2.png",
    description: "Gray Robe",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function TopBenefitsCarousel() {
  return (
    <div className="top-benefits-carousel">
      <Carousel responsive={responsive} infinite={true}>
        {IMAGES.map((image) => {
          return (
            <div className="carousel-image-slot">
              <img src={image.src} alt=""></img>
              <br />
              <span>{image.description}</span>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
