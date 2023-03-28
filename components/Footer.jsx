const Footer = () => {
  return (
    <section className="w-screen py-8 bg-primaryText">
      <div className="w-11/12 m-auto xl:w-10/12">
        <h2 className="py-4 text-2xl md:text-4xl xl:text-6xl">Get in Touch</h2>
        <a href="mailto:umairahmed.dev@gmail.com" className="pt-4 underline">
          umairahmed.dev@gmail.com
        </a>
        <div className="flex gap-4 py-4 text-secondaryText">
          <a
            href="/files/resume.pdf"
            target={"_blank"}
            className="hover:underline hover:text-white"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/umair-ahmed-b7875a148"
            target={"_blank"}
            className="hover:underline hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Airhacker"
            target={"_blank"}
            className="hover:underline hover:text-white"
          >
            Github
          </a>
        </div>
        <div className="pt-4">
          <span className="text-xs text-secondaryText">
            © Umair Ahmed. All Rights Reserved.
          </span>
        </div>
      </div>
    </section>
  );
};
export default Footer;
