import React from "react";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer__band"></div>

            <div className="container">

                <div className="footer__grid-wrapper">
                    <div className="footer__logo-and-social">
                        <img src="#" alt="logo" className="header__logo" />
                        <h2 className="footer__logo-title">JS Friend Finder</h2>
                    </div>
                    <div className="footer__for-individuas">
                        <h3 className="footer__title">For individuals</h3>
                        <ul className="footer__ul">
                            <li className="footer__li"><a href="#" className="footer__a">SignUp</a></li>
                            <li className="footer__li"><a href="#" className="footer__a">LogIn</a></li>
                            <li className="footer__li"><a href="#" className="footer__a">Explore</a></li>
                            <li className="footer__li"><a href="#" className="footer__a">Finder app</a></li>
                            <li className="footer__li"><a href="#" className="footer__a">Features</a></li>
                        </ul>
                    </div>
                    <div className="footer__for-businesses">
                        <h3 className="footer__title">For businesses</h3>
                        <ul className="footer__ul">
                            <li className="footer__li"><a href="#" className="footer__a">Business signup</a></li>
                            <li className="footer__li"><a href="#" className="footer__a">Business login</a></li>
                            <li className="footer__li"><a href="#" className="footer__a">Benefits</a></li>
                            <li className="footer__li"><a href="#" className="footer__a">Resources</a></li>
                            <li className="footer__li"><a href="#" className="footer__a">Advertise</a></li>
                            <li className="footer__li"><a href="#" className="footer__a">Setup</a></li>
                        </ul>
                    </div>
                    <div className="footer__about">
                        <h3 className="footer__title">About</h3>
                        <ul className="footer__ul">
                            <li className="footer__li"><a href="#" className="footer__a">About us</a></li>
                            <li className="footer__li"><a href="#" className="footer__a">Contact us</a></li>
                            <li className="footer__li"><a href="#" className="footer__a">Privacy Policy</a></li>
                            <li className="footer__li"><a href="#" className="footer__a">Terms</a></li>
                            <li className="footer__li"><a href="#" className="footer__a">Help</a></li>
                        </ul>
                    </div>
                    <div className="footer__contacts">
                        <h3 className="footer__title">Contact Us</h3>
                        <ul className="footer__ul">
                            <li className="footer__li"><a href="tel:+123456789" className="footer__a">+1(234) 567 89</a></li>
                            <li className="footer__li"><a href="email:someemail@someemail.com"
                                className="footer__a">someemail@someemail.com</a></li>
                            <li className="footer__li"><a href="#" className="footer__a">Some Adress</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </footer>
    );
}

export default Footer;