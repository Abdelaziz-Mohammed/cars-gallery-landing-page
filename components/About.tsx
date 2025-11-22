import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#F6F6F6] py-20" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-full min-h-[400px] hidden md:block">
          <Image
            src={"/assets/images/about-img.png"}
            alt="About us"
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div
          className="px-8 sm:pr-12 md:pr-16 py-12 bg-center bg-no-repeat bg-cover bg-black/75 
          bg-blend-color bg-[url('/assets/images/about-img.png')] md:bg-none md:bg-transparent"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-extrabold tracking-wide uppercase mb-6">
            About Us
          </h2>
          <p className="text-sm sm:text-base text-white md:text-black mb-10">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare
            vestibulum diam sit adipis cing elit adipis cing elit.
          </p>
          <p className="text-sm sm:text-base text-white md:text-black mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            ultrices scelerisque urna sed man proin lacinia. Posuere facilisis
            ut nullam ipsum at enim. Ut imperdiet eu sodales eros.
            <br />
            nibh elementum eget. Integer dolor urna egestas sit donec neque, mi
            elit. Diam praesent mi blandit uices vel amet. Sapien, ac tortor vel
            ut pharetra, celerisqd. sklois kias rabs raffead book.
          </p>
          <button className="primary-btn w-full max-w-[200px]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
