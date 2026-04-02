const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex gap-7">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/Wansaaa" target="_blank">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://linkedin.com/in/ichwan-sanusi" target="_blank">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/wansa.project" target="_blank">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
