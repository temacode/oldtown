import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
    margin: auto 20px;
    transition: 0.3s;
    ::before {
        position: fixed;
        transition: 0.3s;
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(39,39,39,0.9);
        display: block;
        z-index: 4;
        transition: visibility 0s, opacity 0.3s;
        opacity: ${props => props.isModalHidden ? '0' : '1'};
        visibility: ${({ isModalHidden }) =>
        (typeof isModalHidden === 'undefined') || isModalHidden ? 'hidden' : 'visible'};
        top: 0;
        left: 0;
    }
    @media screen and (min-width: 759px) {
        max-width: 1200px;
        margin: auto;
        padding: 20px;
    }
`;

const Content = props => {
    return (
        <Container isModalHidden={ props.isModalHidden }>
            {props.children}
        </Container>
    );
};

export default Content;