import Image from "next/image";
import Container from "./Container";

export default function About() {
  return (
    <div className="bg-[#F6F6F6] py-20" id="about">
      <div className="flex gap-0 relative">
        <div className="relative h-full min-h-[435px] w-1/2 max-lg:hidden">
          <Image
            src={"/assets/images/about-img.png"}
            alt="About us"
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="h-full min-h-[435px] w-full lg:w-1/2"></div>
        {/* text over image */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0
          bg-no-repeat bg-cover bg-black/50 bg-blend-color max-h-[435px]
          bg-[url('/assets/images/about-img.png')] lg:bg-none lg:bg-transparent"
        >
          <Container className="flex gap-0">
            <div className="max-lg:hidden w-1/2"></div>
            <div className="w-full lg:w-1/2 lg:pl-10 max-h-full py-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-extrabold tracking-wide uppercase mb-5">
                About Us
              </h2>
              <p className="text-xs sm:text-sm text-white lg:text-black mb-8">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare
                vestibulum diam sit adipis cing elit adipis cing elit.
              </p>
              <p className="text-sm sm:text-base text-white lg:text-black mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                ultrices scelerisque urna sed man proin lacinia. Posuere
                facilisis ut nullam ipsum at enim. Ut imperdiet eu sodales eros.
                <br />
                nibh elementum eget. Integer dolor urna egestas sit donec neque,
                mi elit. Diam praesent mi blandit uices vel amet. Sapien, ac
                tortor vel ut pharetra, celerisqd. sklois kias rabs raffead
                book.
              </p>
              <button className="primary-btn w-full max-w-[200px]">
                Read More
              </button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
