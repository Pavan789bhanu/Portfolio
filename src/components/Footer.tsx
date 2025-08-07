import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';  // Add this import
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://github.com/Pavan789bhanu" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/pavan-kumar-malasani-4779071a3/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
        <a href="mailto:pavanbhanu3712@gmail.com">
          <EmailIcon />
        </a>
      </div>
      <p>
  Thank you for visiting! </p>

    </footer>
  );
}

export default Footer;
