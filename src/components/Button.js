import React from 'react';
import styled from 'styled-components/macro';

const StyledButton = styled.div`
    display: block;
    width: 100%;
    margin: 10px;
    padding: 16px 16px;
    background: ${({ secondary }) => secondary ? '#eaeaea' : 'rgba(87, 245, 100, 0.25)'};
    border-radius: 6px;
    transition: 0.2s;
    font-weight: 600;
    text-align: center;
    color: #585858;
    cursor: pointer;
    :first-child {
        margin-left: 0;
    }
    :last-child {
        margin-right: 0;
    }
`;

const Button = ({ children, secondary, onClick }) => (
    <StyledButton secondary={ secondary } onClick={ onClick }>
        {children}
    </StyledButton>
);

export default Button;