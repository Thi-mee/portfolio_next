const Footer = () => (
  <footer className="bg-deepBlue py-8 text-center text-slateGray">
    <p>
      &copy; {new Date().getFullYear()} Timilehin Adenuga | The Umbrella Dev.
      All Rights Reserved.
    </p>
    <div className="space-x-4 mt-4">
      <a
        href="https://github.com/Thi-mee"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slateGray hover:text-accent">
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/timiadenuga"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slateGray hover:text-accent">
        LinkedIn
      </a>
      <a
        href="mailto:timi.nihel@gmail.com"
        className="text-slateGray hover:text-accent">
        Email
      </a>
      <a
        href="https://x.com/timi_nihel"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slateGray hover:text-accent">
        X
      </a>
    </div>
  </footer>
);

export default Footer;
