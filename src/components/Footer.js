import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12 ">
                            <h4>Address</h4>
                            <ul className="list-unstyled">
                                <li>Kabupaten Bojonegoro</li>
                                <li>Jawa Timur</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-12 ">
                            <h4>Katalog</h4>
                            <ul className="list-unstyled">
                                <li>Download Katalog</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-12">
                            <h4>Contact Us</h4>
                            <ul className="list-unstyled">
                                <li>Email: maulidda0518@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-12">
                            <h4>Follow Us</h4>
                            <ul className="list-unstyled">
                                <li>Instagram: <a href="https://www.instagram.com/happybakery.id">happybakery.id</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-center">
                                &copy; <span id="currentYear"></span> HappyBakery - All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        background: var(--mainDark); 
        padding-top: 3rem;
        color: var(--mainWhite);
        border-top: 5px solid var(--mainGreen);
    }

    .footer-bottom {
        padding-top: 3rem;  
        padding-bottom: 2rem;
    }

    h4 {
        color: var(--mainGreen);
    }

    p {
        color: var(--mainLightGray);
    }

    .list-unstyled li {
        color: var(--mainLightGray);
    }

    a {
        color: var(--mainLightGreen);
    }

    a:hover {
        color: var(--mainLightGreen);
        text-decoration: none;
    }

    .text-center {
        color: var(--mainLightGray);
    }
`;
