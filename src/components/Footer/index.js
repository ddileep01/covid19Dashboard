import {VscGithubAlt} from 'react-icons/vsc'
import {FaLinkedin, FaTwitter} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <h1 className="footer-heading">
      COVID19
      <span className="higlight-india">INDIA</span>
    </h1>
    <p className="footer-description">
      we stand with everyone fighting on the front lines
    </p>
    <div className="footer-icons-container">
      <a
        href="https://github.com/dileep-doddi"
        target="_blank"
        rel="noreferrer"
      >
        <VscGithubAlt className="github-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/dileep-kumar-doddi/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="instagram-icon" />
      </a>
      <a
        href="https://twitter.com/dileep_layne"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter className="twitter-icon" />
      </a>
    </div>
  </div>
)

export default Footer
