import Carousel from "react-bootstrap/Carousel";
import img1 from "/Slider/1.png";
import img2 from "/Slider/2.png";
import img3 from "/Slider/3.png";
import img4 from "/Slider/4.png";
import { MapPinIcon } from "@heroicons/react/24/solid";
function Intro() {
  return (
    <Carousel data-carousel={"static"}>
      <Carousel.Item>
        <img src={img1} className="h-[100vh] d-block w-100 " />
        <Carousel.Caption className="text-center flex justify-center gap-4">
          <MapPinIcon className="h-12  r-[15%] text-[#B8F21C] text-xl" />
          <h3 className="text-[#B8F21C] ">“Göygöl” National Park</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} className="h-[100vh] d-block w-100" />
        <Carousel.Caption>
          <h3></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} className="h-[100vh] d-block w-100" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img4} className="h-[100vh] d-block w-100" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Intro;
