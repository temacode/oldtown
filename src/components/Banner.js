import React from 'react';
import styled from 'styled-components/macro';

const StyledBanner = styled.img`
    display: block;
    width: 100%;
    @media screen and (min-width: 759px) {
        width: 50%;
    }
    margin: auto;
    margin-top: 20px;
    border-radius: 12px;
    overflow: hidden;
`;

const Banner = () => (
    <StyledBanner data-src="/natural.png" className="lazyload" alt="Мы используем только фермерские продукты">
    </StyledBanner>
);

export default Banner;