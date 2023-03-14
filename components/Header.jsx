import Link from "next/Link";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <section className="flex flex-col content-center justify-start w-full py-12 text-base text-left border-b-4 border-primaryText text-primaryText">
      <div>
        <h1 className="py-12 text-6xl font-bold text-primaryDarkText">
          Umair <br />
          Ahmed
        </h1>
      </div>
      <div>
        <div>
          <span className="underline">umairahmed.dev@gmail.com</span>
          <h3 className="py-4 text-2xl">Web Developer</h3>
        </div>
        <div>
          <span>Based in Houston.</span>
          <div className="flex gap-4 py-4 text-secondaryText">
            <Link href="/">Resume</Link>
            <Link href="/">LinkedIn</Link>
            <Link href="/">Github</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
