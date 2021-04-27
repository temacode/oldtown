import React from 'react';
import styled from 'styled-components/macro';
import Spinner from './Spinner';

const StyledSubmit = styled.button`
    position: relative;
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
    border: none;
`;

const Overflow = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 6px;
    background: rgba(255,255,255,0.3);
`;

const Icon = styled.i`
    font-size: 30px;
    color: #393939;
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;

const SubmitButton = props => (
    <StyledSubmit { ...props }>
        {!props.isLoading ? props.children : <Overflow><Spinner size={ 30 }></Spinner></Overflow>}
    </StyledSubmit>
);

export default SubmitButton;