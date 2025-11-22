import Image from "next/image";
import Container from "./Container";

export default function Others() {
  return (
    <div className="bg-white pb-10">
      <div className="bg-[#F6F6F6]">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5 py-5">
          <div className="w-full min-h-[300px] relative">
            <Image
              src={"/assets/images/gallery-img-3.png"}
              alt="Gallery Image 3"
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl text-primary font-bold py-4">
              Sed ut perspiciatis unde omnis
            </h3>
            <p className="text-[16px] text-black mb-6">
              Nemo enim ipsam voluptatem quia voluptas sit rnatur aut odit aut
              fugit, sed quia consequuntur
            </p>
            <p className="text-[12px] text-black/80">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
              qui dolorem.
            </p>
          </div>
        </Container>
      </div>
      <div className="bg-[#F6F6F6]">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5 py-5">
          <div className="flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl text-primary font-bold py-4">
              Sed ut perspiciatis unde omnis
            </h3>
            <p className="text-[16px] text-black mb-6">
              Nemo enim ipsam voluptatem quia voluptas sit rnatur aut odit aut
              fugit, sed quia consequuntur
            </p>
            <p className="text-[12px] text-black/80">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
              qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
              qui dolorem.
            </p>
          </div>
          <div className="w-full min-h-[300px] relative">
            <Image
              src={"/assets/images/gallery-img-4.png"}
              alt="Gallery Image 4"
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full min-h-[300px] relative">
            <Image
              src={"/assets/images/gallery-img-5.png"}
              alt="Gallery Image 5"
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full min-h-[300px] relative">
            <Image
              src={"/assets/images/gallery-img-6.png"}
              alt="Gallery Image 6"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </Container>
      </div>
    </div>
  );
}
