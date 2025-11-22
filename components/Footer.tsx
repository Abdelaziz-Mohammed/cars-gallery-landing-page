import Image from "next/image";
import Container from "./Container";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const footerItems = {
  "Mobile app": ["Features", "Live share", "Video record"],
  Community: ["Featured artists", "The Portal", "Live events"],
  Company: ["About us", "Contact us", "History"],
};

const socialMedia = [
  {
    id: 1,
    name: "Facebook",
    icon: <Facebook className="w-3.5" />,
    link: "#",
  },
  {
    id: 2,
    name: "Twitter",
    icon: <Twitter className="w-3.5" />,
    link: "#",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: <Linkedin className="w-3.5" />,
    link: "#",
  },
  {
    id: 4,
    name: "Instagram",
    icon: <Instagram className="w-3.5" />,
    link: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black py-16">
      <Container>
        {/* top footer */}
        <div className="flex justify-between items-start gap-x-10 gap-y-6 flex-wrap">
          <div className="flex items-center gap-3 cursor-pointer hover:cursor-pointer">
            <Image
              src={"/assets/images/logo-footer.svg"}
              alt="Careos Logo"
              width={32}
              height={22}
            />
            <h1 className="text-xl sm:text-2xl font-bold text-white hover:text-primary hoverEffect">
              Careos
            </h1>
          </div>
          <div className="flex justify-between gap-x-10 gap-y-6 flex-wrap">
            <div className="flex gap-x-10 gap-y-6 flex-wrap gap-10">
              {Object.entries(footerItems).map(([title, items], index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-white font-bold mb-4">{title}</h3>
                  <ul className="flex flex-col gap-3">
                    {items.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-white/80 text-sm font-light cursor-pointer hover:text-primary hoverEffect"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <button className="primary-btn px-10 text-sm border border-primary hover:text-primary hover:bg-white">
                Register
              </button>
              <button className="primary-btn px-10 text-sm bg-white text-primary border border-primary hover:bg-primary hover:text-white">
                Log in
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-primary my-8"></div>
        {/* bottom footer */}
        <div className="flex items-center justify-between gap-x-10 gap-y-6 flex-wrap">
          <p className="text-white/80 font-normal text-[15px]">
            &copy; Photo, Inc. 2019. We love our users!
          </p>
          <div className="flex items-center gap-6">
            <p className="text-white/80 font-normal text-[15px]">Follow us:</p>
            <div className="flex items-center gap-3">
              {socialMedia.map((item) => (
                <a
                  key={item.id}
                  className="w-8 h-8 text-white bg-primary flex items-center justify-center rounded-full
                  border border-primary hover:bg-white hover:text-primary hoverEffect cursor-pointer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
