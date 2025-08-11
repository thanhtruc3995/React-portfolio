import React from 'react'

const Button = ({text, className, targetId}) => {
  const handleClick = (e) => {
    e.preventDefault(); // Stop the link from jumping instantly
    
    if (targetId) {
      const target = document.getElementById(targetId); 
      if (target) {
        const offset = window.innerHeight * 0.15; // Leave a bit of space at the top
        
        // Calculate how far down the page we need to scroll
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        // Scroll smoothly to that position
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <a 
      href={targetId ? `#${targetId}` : "#"}
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle"/>
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  )
}

export default Button