import facebook from './assets/facebook.png';
import instagram from './assets/Instagram_icon.png';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div>
            <Link to = "top"> Return to top</Link>
            <div className="footer">


                <div className="footer_links">
                    <p>Getting Started</p>
                    <p>About us</p>
                </div>



                <div className="address" >
                    <p>123 address lane</p>
                    <p>Apopka, Florida</p>
                    <p>32703</p>
                </div>

                <div className="images">
                    <img src={facebook} alt = "An image of facebook logo"/>
                    <img src={instagram} alt = "An image of instagram logo"/>
                </div>

                <div className="info">
                    <p>123-456-7890</p>
                    <p>info@tvtracker.com</p>

                </div>
            </div>
        </div>


    )
}
export default Footer;