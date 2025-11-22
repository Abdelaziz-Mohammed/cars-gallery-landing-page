import Container from "./Container";

export default function Hero() {
  return (
    <div
      className="h-[calc(100vh-64px)] bg-black/40 bg-cover bg-no-repeat bg-center bg-blend-color"
      style={{ backgroundImage: `url('/assets/images/hero-bg.png')` }}
      id="home"
    >
      <Container className="flex items-center h-full">
        <div className="w-full md:w-1/2 flex flex-col gap-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold uppercase leading-12 sm:leading-14 md:leading-16">
            Purchase your <br />
            <span className="text-primary">Perfect</span> car
          </h1>
          <div className="space-y-2 sm:space-y-3">
            <p className="text-white text-base sm:text-lg md:text-2xl leading-6 sm:leading-7 md:leading-8">
              Over 1000+ New Cars Available Here
            </p>
            <p className="text-white/90 text-xs sm:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscin <br /> elitVit
              ae pellentesque sed etiam tortor.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-[432px]">
            <button className="primary-btn">Explore More</button>
            <button className="primary-btn text-white bg-transparent border-2 border-primary">
              See Cars
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
