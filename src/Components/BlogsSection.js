import React from 'react'
import styled from 'styled-components';
import { SectionStyled } from '../Layouts';
import MainTitle from './MainTitle';
import blogs from '../blogs';

function BlogsSection() {
    return (
        <BlogsSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle title={'Partners'} subtitle={'Our Top Partners'} para={'At NepServ, we are proud to collaborate with a diverse array of industry-leading partners. These partnerships allow us to leverage cutting-edge technologies and resources to deliver innovative solutions and exceptional services to our clients. Together with our partners, we are committed to driving digital transformation and empowering businesses to thrive in the present dynamic landscape.'}/>
                </div>
                <div className="blogs">
                    {
                        blogs.map((blog) =>{
                            return <div className="blog" key={blog.id}>
                                <div className="image">
                                    <img src={blog.image} alt="" />
                                </div>
                                <div className="user">
                                    <p>Partner : </p>
                                    <p>{blog.name}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </SectionStyled>
        </BlogsSectionStyled>
    )
}

const BlogsSectionStyled = styled.div`
    
    .blogs{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
        padding-top: 2rem;
        .blog{
            background: rgba(255, 255, 255, 0.03);
            border-radius: 20px;
            .image{
                height: 300px;
                width: 100%;
                overflow: hidden;
                border-top-right-radius: 20px;
                border-top-left-radius: 20px;
                transition: all .4s ease-in-out;
                img{
                    height: 100%;
                    width: 100%;
                    transition: all .4s ease-in-out;
                    object-fit: cover;
                    border-top-right-radius: 20px;
                    border-top-left-radius: 20px;
                    filter: grayscale(50%);
                    &:hover{
                        transform: scale(1.2) rotate(10deg);
                        filter: grayscale(0);
                    }
                }
            }

            h6{
                font-weight: 500;
                font-size: 1.3rem;
                padding-top: 1rem;
                padding-left: 1rem;
                padding-right: 1rem;
            }
            .user{
                padding-top: .2rem;
                padding-bottom: 1.5rem;
                display: flex;
                padding-left: 1rem;
                padding-right: 1rem;
                p:first-child{
                    padding-right: 0.4rem;
                    opacity: 0.5;
                }
            }
        }
    }
`;

export default BlogsSection;
