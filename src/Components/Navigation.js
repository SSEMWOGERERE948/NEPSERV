import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo2.png';
import nepserv from '../img/nep.png';
import { FaWhatsapp, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

function Navigation() {
    return (
        <NavigationStyled>
            <div className="logo">
                <img src={nepserv} alt="" />
            </div>
            <ul className="nav-items">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Products</a>
                </li>
                <li>
                    <a href="#">Partners</a>
                </li>
                <li>
                    <a href="#">Contact us</a>
                </li>
                <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter style={{ color: '#1DA1F2' }} /></a>
                </li>
                <li>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp style={{ color: '#25D366' }} /></a>
                </li>
                <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ color: '#C13584' }} /></a>
                </li>
                <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook style={{ color: '#1877F2' }} /></a>
                </li>
            </ul>
        </NavigationStyled>
    );
}

const NavigationStyled = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-items {
        display: flex;
        align-items: center;
        li {
            margin: 0 1rem;
        }
    }
    .logo {
        img {
            width: 200px;
        }
    }
`;

export default Navigation;
