import Link from "next/Link";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <section className="flex flex-col content-center justify-start w-11/12 m-auto text-base text-left text-secondaryDarkText">
      <div>
        <h3>Hey, I&apos;M</h3>
        <h1 className="py-4 text-4xl text-primaryDarkText">
          UMAIR <br />
          AHMED
        </h1>

        <p>I&apos;m a front-end web developer</p>
      </div>
      <Link
        className="flex content-center justify-center py-4 text-center "
        href="/"
      >
        <IoIosArrowDown className="text-base" />
      </Link>
    </section>
  );
};
export default Header;
