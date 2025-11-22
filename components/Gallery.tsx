import Container from "./Container";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="bg-[#f6f6f6] py-10">
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
          <div className="w-full min-h-[300px] relative">
            <Image
              src={"/assets/images/gallery-img-1.png"}
              alt="Gallery Image 1"
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black font-bold py-4">
              Sed ut perspiciatis
            </h3>
            <p className="text-sm text-black/80">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia conseq uuntur magni dolores eos qui ratione
              voluptatem se.
            </p>
            <button className="primary-btn mt-10">Learn More</button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-full min-h-[300px] relative">
            <Image
              src={"/assets/images/gallery-img-2.png"}
              alt="Gallery Image 2"
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl text-black font-bold py-4">
              Lorem ipsum dolor
            </h3>
            <p className="text-sm text-black/80">
              Amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magn aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi.
            </p>
            <button className="primary-btn mt-10">Learn More</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
