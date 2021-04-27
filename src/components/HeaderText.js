import React from 'react';
import styled from  'styled-components/macro';

const Text = styled.h2`
    font-size: 25px;
    font-weight: 900;
    margin: 20px auto;
`;

const HeaderText = props => (
    <Text>{props.children}</Text>
);

export default HeaderText;