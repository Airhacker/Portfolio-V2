import Link from "next/Link";

const Ninfas = () => {
  return (
    <div className="text-base text-primaryText">
      <div className="py-4">
        <Link
          className="text-2xl font-semibold "
          href="https://ninfasmissouricity.com/"
          target={"_blank"}
        >
          Ninfa&apos;s Missouri City
        </Link>
      </div>

      <div className="flex gap-4 text-xs">
        <span className="px-2 py-1 rounded-xl bg-primaryText text-bgColor">
          NEXT JS
        </span>
        <span className="px-2 py-1 rounded-xl bg-primaryText text-bgColor">
          REACT
        </span>
        <span className="px-2 py-1 rounded-xl bg-primaryText text-bgColor">
          CSS
        </span>
      </div>
      <div></div>
    </div>
  );
};
export default Ninfas;
