export default function CarCard({
  car,
}: {
  car: {
    id: number;
    heading: string;
    paragraph: string;
    offer: string;
    imageSrc: string;
  };
}) {
  return (
    <div
      className="max-sm:max-w-[340px] max-sm:min-w-full relative h-[420px] bg-cover bg-center shadow-md hover:shadow-2xl hoverEffect"
      style={{ backgroundImage: `url(${car.imageSrc})` }}
    >
      <div className="absolute top-0 left-0 right-0 bg-black/47 p-4 text-white backdrop-blur-md">
        <h3 className="text-lg font-semibold mb-2">{car.heading}</h3>
        <p className="text-xs text-white/80">{car.paragraph}</p>
      </div>
      <div className="flex items-center gap-2 absolute bottom-0 left-0 right-0 p-6">
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary text-center px-2 uppercase">
          {car.offer}
        </p>
        <div className="flex-1 h-1 bg-[#D9D9D9]"></div>
      </div>
    </div>
  );
}
