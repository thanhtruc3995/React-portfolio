import { socialImgs } from "../constants";

const Footer = () => {

  const handleSocialClick = (socialName) => {
    // Map social names to URLs
    const socialUrls = {
      Github: 'https://github.com/thanhtruc3995', // Your GitHub username
      linkedin: 'https://www.linkedin.com/in/truc-ton/', // Your LinkedIn profile
    };
    
    const url = socialUrls[socialName];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div 
              key={index} 
              className="icon cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onClick={() => handleSocialClick(socialImg.name)}
            >
              <img src={socialImg.imgPath} alt={`${socialImg.name} social icon`} />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Alice Ton. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;