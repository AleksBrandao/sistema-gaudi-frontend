// import "./header.css"
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div id="footer" fix="down">
        
        <div>
        <div className="socialmedia-icons">
                
        <>&copy; Sistema Gaudi 2022</>
                <a
                  href="https://bit.ly/3vJqgoV"
                  target="_blank"
                  rel="noreferrer"
                  className="facebook"
                >
                  <FaFacebook aria-label="Facebook" />
                </a>
                <a
                  href="https://bit.ly/3lIt1PO"
                  target="_blank"
                  rel="noreferrer"
                  className="Youtube"
                >
                  <FaYoutube aria-label="Youtube" />
                </a>
                <a
                  href="https://bit.ly/3twIDKQ"
                  target="_blank"
                  rel="noreferrer"
                  className="Instagran"
                >
                  <FaInstagram aria-label="Facebook" />
                </a>
            
            </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
