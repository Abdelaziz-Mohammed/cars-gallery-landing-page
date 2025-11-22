import Container from "./Container";

export default function Services() {
  return (
    <div
      className="h-[calc(100vh-64px)] bg-black/25 bg-cover bg-no-repeat bg-center bg-blend-color"
      style={{ backgroundImage: `url('/assets/images/services-bg.png')` }}
      id="services"
    >
      <Container className="h-full py-8 sm:py-10 md:py-12 flex items-end">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold uppercase leading-12 sm:leading-14 md:leading-16">
          We are provide professional <br />
          <span className="text-primary">car services</span>
        </h1>
      </Container>
    </div>
  );
}
