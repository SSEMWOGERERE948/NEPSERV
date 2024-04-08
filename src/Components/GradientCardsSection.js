import React from 'react'
import { SectionStyled } from '../Layouts';
import GradientCard from './GradientCard';
import MainTitle from './MainTitle';
import avatar from '../img/avata.jpg';
import styled from 'styled-components';
import CtaButton from './CtaButton';
import HealthPal from '../img/healthpal.png';
import pangisa from '../img/pangisa.png';
import Egret from '../img/egret.png';
import YouRemit from '../img/remit.png';
import seed from '../img/seed.png';
import vantage from '../img/vantage.png';
import computer from '../img/computer.jpg';

function GradientCardsSection() {
    return (
        <GradientCardsSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'Our products'} subtitle={'Discover Nepserv products'} para={'Our products at Nepserv are meticulously crafted to empower businesses, driving efficiency, innovation, and growth.'} />
                </div>
                <div className="gradient-cards-con">
                    <GradientCard image={vantage} avatar={avatar} title={'Nepserv Vantage'} />
                    <GradientCard image={YouRemit} avatar={avatar} title={'YouRemit'}  />
                    <GradientCard image={pangisa} avatar={avatar} title={'Pangisa'}  />
                    <GradientCard image={seed} avatar={avatar}  title={'Seed'}  />
                    <GradientCard image={Egret} avatar={avatar}  title={'Egret'} />
                    <GradientCard image={HealthPal} avatar={avatar}  title={'HealthPal'}  />
                </div>
                <div className="load">
                    <CtaButton name={'View More'} />
                </div>
            </SectionStyled>
        </GradientCardsSectionStyled>
    )
}

const GradientCardsSectionStyled = styled.div`
    .load{
        padding-top: 3rem;
        text-align: center;
    }
`;

export default GradientCardsSection;
