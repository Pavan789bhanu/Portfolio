import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import profilePic from "./../assets/images/profile.png";
import EmailIcon from "@mui/icons-material/Email"; // Add this import
import "./Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/Pavan789bhanu"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/pavan-kumar-malasani-4779071a3/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:pavanbhanu3712@gmail.com">
              <EmailIcon />
            </a>
          </div>
          <h1>Pavan Kumar Malasani</h1>
          <h2>Data Scientist/LLM</h2>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/Pavan789bhanu"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/pavan-kumar-malasani-4779071a3/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
             <a href="mailto:pavanbhanu3712@gmail.com">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
