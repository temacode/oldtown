import React from 'react';
import styled from 'styled-components/macro';

const ButtonsBlock = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: auto;
    margin-bottom: 20px;
`;

const ContactButton = styled.a`
    display: block;
    padding: 8px 16px;
    background: rgba(87, 169, 245, 0.25);
    border-radius: 6px;
    margin-left: 10px;
    margin-right: 10px;
    transition: 0.2s;
    :hover {
        background: rgba(87, 169, 245, 0.45);
    }
    i {
        margin-right: 10px;
    }
`;

const HeaderControls = () => (
    <ButtonsBlock>
        <ContactButton href="tel: +7(980) 561-09-26">
            <i className="fas fa-phone-alt"></i>Позвонить
        </ContactButton>
        <ContactButton target="_blank" href="https://api.whatsapp.com/send?phone=79805610926">
            <i className="fab fa-whatsapp"></i>Написать
        </ContactButton>
    </ButtonsBlock>
);

export default HeaderControls;