import React from "react";
import './footer.scss';
import {Link} from "react-router-dom";
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className='footer' style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt=''/>
                        <Link to="/">9Moviez</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to='/'>Home</Link>
                        <Link to='/'>About Us</Link>
                        <Link to='/'>Contact Us</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>

                    <div className="footer__content__menu">
                        <Link to='/'>Live</Link>
                        <Link to='/'>FAQs</Link>
                        <Link to='/'>Requests</Link>
                        <Link to='/'>Privacy Policy</Link>
                    </div>

                    <div className="footer__content__menu">
                        <Link to='/movie'>Movies</Link>
                        <Link to='/tv'>Tv Series</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;