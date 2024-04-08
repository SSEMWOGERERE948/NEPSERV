import React from 'react';
import styled, { keyframes } from 'styled-components';
import map from '../img/map.png';
import { FaTwitter, FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function ContactSection() {
    return (
        <ContactSectionStyled>
            <div className="contact-content">
                <div className="contact-info">
                    <h3 className="contact-title">Contact Us</h3>
                    <div className="info-item">
                        <FaMapMarkerAlt />
                        <p>Kanjokya Street, Kanjokya House, Level 2, Kampala, Uganda.</p>
                    </div>
                    <div className="info-item">
                        <FaPhone />
                        <p>+256 393236376</p>
                    </div>
                    <div className="info-item">
                        <FaEnvelope />
                        <p>support@nepserv.co.ug | info@nepserv.co.ug</p>
                    </div>
                    <div className="social-icons">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter style={{ color: '#1DA1F2' }} /></a>
                        <a href="https://wa.me/447869977162" target="_blank" rel="noopener noreferrer"><FaWhatsapp style={{ color: '#25D366' }} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram style={{ color: '#C13584' }} /></a>
                    </div>
                </div>
                <div className="contact-form">
                    <h3 className="form-title">Get in Touch</h3>
                    <form>
                        <div className="form-group">
                            <StyledInput type="text" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <StyledInput type="tel" placeholder="Phone Number" />
                        </div>
                        <div className="form-group">
                            <StyledInput type="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <StyledButton type="submit">Submit</StyledButton>
                        </div>
                    </form>
                </div>
            </div>
        </ContactSectionStyled>
    );
}

const moveBorder = keyframes`
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
`;

const ContactSectionStyled = styled.div`
    background: url(${map}) center/cover no-repeat;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .contact-content {
        background: linear-gradient(130deg,#eb3fa9,#395ff6 50%,#eb3fa9);
        padding: 2rem;
        border-radius: 10px;
        width: 80%;
        max-width: 600px;
        text-align: center;
        color: #fff;
    }

    .contact-title {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .social-icons {
        display: flex;
        justify-content: center;
        margin-top: 1rem;

        a {
            color: #fff;
            font-size: 1.5rem;
            margin-right: 1rem;
            transition: color 0.3s ease;

            &:hover {
                color: #eb3fa9;
            }
        }
    }

    .form-title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .form-group {
        margin-bottom: 1rem;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 2px solid transparent;
    border-radius: 5px;
    outline: none;
    background: linear-gradient(130deg,#eb3fa9,#395ff6 50%,#eb3fa9);
    color: #fff;
    transition: border-color 0.3s ease, background 0.3s ease;

    &:focus {
        border-color: #fff;
        animation: ${moveBorder} 3s infinite alternate; /* Apply the moving border animation */
    }

    &::placeholder {
        color: #fff;
    }
`;

const StyledButton = styled.button`
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #eb3fa9;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #d63187;
    }
`;

export default ContactSection;
