import React from 'react';
import styled from 'styled-components/macro';

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    margin-bottom: 20px;
    a {
        display: block;
        width: 50%;
    }
    @media screen and (min-width: 759px) {
        a {
            width: 10%;
        }
    }
`;

const StyledLogo = styled.img`
    width: 100%;
`;

const LogoDelimeter = styled.div`
    position: relative;
    width: 30%;
    @media screen and (min-width: 759px) {
        width: 10%;
    }
    margin: auto;
    height: 4px;
    background: #393939;
    margin-top: 5px;
    border-radius: 5px;
    ::after {
        position: absolute;
        content: '';
        width: 4px;
        height: 20px;
        top: -8px;
        left: 50%;
        margin-left: -2px;
        background: #393939;
        border-radius: 5px;
    }
`;

const Name = styled.h1`
    position: relative;
    text-align: center;
    font-size: 30px;
    margin: 10px 0 10px 0;
    color: #393939;
`;

const GMOMark = styled.img`
    position: absolute;
    width: 50px;
    right: -80px;
    opacity: 0.2;
`;

const Header = () => (
    <StyledHeader>
        <a href="https://hotel-oldtown.ru" target="_blank" rel="noopener noreferrer">
            <StyledLogo data-src="/logo.jpeg" className="lazyload" alt="Старый город | Торты"></StyledLogo>
        </a>
        <LogoDelimeter></LogoDelimeter>
        <Name>ТОРТЫ<GMOMark data-src="/gmofree.png" className="lazyload" alt="Без использования ГМО"></GMOMark></Name>
    </StyledHeader>
);

export default Header;