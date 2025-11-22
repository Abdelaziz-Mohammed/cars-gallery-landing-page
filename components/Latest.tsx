import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "./Container";
import CarCard from "./CarCard";

const carsData = [
  {
    id: 1,
    heading: "Luxgrious Auto Mobile",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    offer: "Hot Sells",
    imageSrc: "/assets/images/car-img-1.png",
  },
  {
    id: 2,
    heading: "Luxgrious Auto Mobile",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    offer: "Hot Sells",
    imageSrc: "/assets/images/car-img-2.png",
  },
  {
    id: 3,
    heading: "Luxgrious Auto Mobile",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    offer: "Hot Sells",
    imageSrc: "/assets/images/car-img-3.png",
  },
];

export default function Latest() {
  return (
    <div className="bg-[#E9E9E9] py-20" id="cars">
      <Container>
        <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold uppercase mb-10">
          our Latest cars
        </h2>
        <p className="text-xs sm:text-[14px] md:text-sm text-black">
          Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare
          vestibulum diam sit adipis cing elit adipis cing elit.
        </p>
        <div className="flex flex-col gap-6">
          <div className="self-end flex items-center gap-4">
            <button className="primary-btn h-10 border border-primary text-primary bg-transparent">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="primary-btn h-10">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-col max-sm:items-center max-sm:justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
            {carsData.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
