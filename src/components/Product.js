import React from 'react';
import styled from 'styled-components/macro';
import CaloryDimension from './CaloryDimension';
import Button from './Button';
import ButtonsList from './ButtonsList';
import typeHandler from '../helpers/typeHandler';

const ProductContainer = styled.div`
    border-radius: 12px;
    box-shadow: 0 1px 6px 1px rgba(0, 0, 0, 0.10);
    margin-bottom: 20px;
    max-width: 400px;
    @media screen and (min-width: 650px) {
        margin: 10px;
        max-width: 380px;
    }
`;

const ProductHeader = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 12px 12px 0 0;
`;

const ProductHeaderOverlay = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 200px;
    position: relative;
    cursor: pointer;
    border-radius: 12px 12px 0 0;
    img {
        position: relative;
        z-index: 1;
        width: 150%;
    }
    ::after {
        position: absolute;
        content: '';
        z-index: 2;
        height: 200px;
        width: 100%;
        transition: 0.3s;
        top: 0;
        font-size: 100px;
        text-align: center;
        padding-top: 30px;
        color: white;
        border-radius: 12px 12px 0 0;
        font-weight: 600;
    }
    :hover::after {
        opacity: 1;
        content: '+';
        background: rgba(0, 0, 0, 0.7);
    }
`;

const ProductBody = styled.div`
    padding: 0 10px;
    padding-bottom: 10px;
`;

const HelperText = styled.p`
    color: #595959;
    font-size: 12px;
    text-align: center;
    margin-top: 5px;
    i {
        color: #999999;
        margin-left: 5px;
    }
`;

const ProductName = styled.h3`
    font-weight: 600;
    text-align: center;
    font-size: 25px;
    margin-top: 10px;
`;

const ProductDescription = styled.p`
    color: #595959;
    margin-top: 10px;
`;

const Product = ({ path, type, name, description, kkals, price, options, structure, showProduct, showPayment, product }) => (
    <ProductContainer>
        <ProductHeader>
            <ProductHeaderOverlay onClick={ () => showProduct({ path: path, structure: structure }) }>
                <img src={ path } alt=""></img>
            </ProductHeaderOverlay>
        </ProductHeader>
        <ProductBody>
            <HelperText>Нажмите, чтобы посмотреть состав<i className="fas fa-search-plus"></i></HelperText>
            <ProductName>{ name }</ProductName>
            <ProductDescription>{ description }</ProductDescription>
            <CaloryDimension kkals={ kkals } options={ options }></CaloryDimension>
            <ButtonsList>
                <Button secondary>{price}₽/{typeHandler(type).dimension}</Button>
                <Button onClick={ () => showPayment(product) }>Купить<i className="fas fa-shopping-cart"></i></Button>
            </ButtonsList>
        </ProductBody>
    </ProductContainer>
);

export default Product;