import Container from "./Container";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const navItems = [
  { id: 1, title: "Home", link: "home" },
  { id: 2, title: "About Us", link: "about" },
  { id: 3, title: "Cars", link: "cars" },
  { id: 4, title: "Services", link: "services" },
];

export default function Navbar() {
  return (
    <div className="bg-white h-16 flex items-center justify-center shadow-md fixed top-0 w-full z-50">
      <Container className="flex items-center justify-between gap-10">
        <div className="flex items-center gap-3">
          <Image
            src={"/assets/images/logo.svg"}
            alt="Careos Logo"
            width={32}
            height={22}
          />
          <h1 className="text-xl sm:text-2xl font-bold text-black hover:text-primary hoverEffect">
            Careos
          </h1>
        </div>
        <nav className="hidden md:flex items-center justify-between">
          <ul className="flex items-center gap-0">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="inline-block px-3 font-medium text-black hover:text-primary hoverEffect"
              >
                <a href={`#${item.link}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="hidden md:inline-block primary-btn">
          Order Now
        </button>
        {/* mobile menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </Container>
    </div>
  );
}
