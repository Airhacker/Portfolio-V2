const Footer = () => {
  return (
    <section className="w-screen py-8 bg-primaryText">
      <div className="w-11/12 m-auto">
        <h2 className="py-4 text-2xl md:text-4xl xl:text-6xl">Get in Touch</h2>
        <p className="pt-4">umairahmed.dev@gmail.com</p>
        <div className="flex gap-4 py-4 text-secondaryText">
          <a href="">Resume</a>
          <a href="">LinkedIn</a>
          <a href="">Github</a>
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
