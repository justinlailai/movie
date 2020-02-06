import React from 'react';
import styled from 'styled-components';



const HeroImage = ({image, title, text}) => (
    <div image={image}>
        <div className="heroimage-content">
            <div className="heroimage-text">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    </div>
)

export default HeroImage;

