import React from 'react';
import styled from 'styled-components/macro';

const Text = styled.p`
    display: block;
    text-align: center;
`;

const Description = () => (
    <Text>
        Большой ассортимент тортов, капкейков и десертов на любой вкус, можно выбрать готовый или собрать свой
    </Text>
);

export default Description;