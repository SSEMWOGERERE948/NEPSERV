import React from 'react'
import styled from 'styled-components';
import CtaButton from './CtaButton';
import Navigation from './Navigation';
import SmallHeading from './SmallHeading';
import blockchain from '../img/bchain.png';
import hero from '../img/hero4.png';
import ss from '../img/ss.png';
import ss1 from '../img/ss1.png';


function MainContent() {
    return (
        <MainContentStyled >
            <Navigation />
            <div className="content">
                <div className="left">
                    <SmallHeading title={'Nepserv Consults Limited'} identifier={'Before'} />
                    <h1>
                    Crafting Software  Solutions and Beyond for Your Digital Needs
                        The Best Place for your software solutions<span className='GradientText'>Awesome Softwares</span> 
                    </h1>
                    <p>
                    Nepserv is a leading software development company, offering tailored solutions for businesses across various domains.
                    From websites to enterprise applications, Nepserv excels in delivering high-quality software products that drive efficiency
                    and innovation. With a focus on customer satisfaction and technical excellence, Nepserv is committed to shaping the future 
                    of software development.
                    </p>
                    <div className="btns-con">
                        <CtaButton name={'Our Services'} />
                        <CtaButton name={'explore'} />
                    </div>
                </div>
                <div className="right">
                    <img src={hero} alt="" />
                </div>
            </div>
        </MainContentStyled >
    )
}


const MainContentStyled = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    .content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100%;
        width: 100%;
        .left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            h1{
                padding: 1.8rem 0;
            }
            .btns-con{
                margin-top: 3rem;
            }
        }

        .right{
            img{
                position: absolute;
                right: -11%;
                bottom: -1%;
                width: 60%;
            }
        }
    }
`;
export default MainContent;
