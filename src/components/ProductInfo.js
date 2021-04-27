import React from 'react';
import styled from 'styled-components/macro';

const ProductBlock = styled.div`
    position: fixed;
    z-index: 5;
    width: 90%;
    max-height: 100%;
    overflow: scroll;
    border-radius: 6px;
    background: white;
    top: ${props => props.isHidden ? '200%' : '50%'};
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: 0.3s;
    @media screen and (min-width: 759px) {
        width: 50%;
    }
`;

const Structure = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
`;

const Product = styled.p`
    padding: 8px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.15);
    border-radius: 6px;
    margin: 5px;
    font-weight: 700;
    display: flex;
    align-items: center;
    span {
        display: block;
        width: 8px;
        height: 8px;
        background: #292929;
        border-radius: 5px;
        margin-right: 5px;
    }
`;

const CloseBtn = styled.div`
    width: 50%;
    margin: 20px auto;
    padding: 8px 16px;
    border-radius: 6px;
    background: #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const ProductInfo = ({ isHidden, path, structure, hideProductInfo }) => {
    const structureList = structure.map((e, i) => {
        return (
            <Product key={ i }><span></span>{e}</Product>
        );
    });
    return (
        <ProductBlock isHidden={ isHidden }>
            <Structure>
                {structureList}
            </Structure>
            <CloseBtn onClick={ hideProductInfo }>Закрыть</CloseBtn>
        </ProductBlock>
    );
};

export default ProductInfo;
