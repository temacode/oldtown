import React from 'react';
import styled from 'styled-components/macro';

const List = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
`;

const ButtonsList = props => (
    <List>
        {props.children}
    </List>
);

export default ButtonsList;