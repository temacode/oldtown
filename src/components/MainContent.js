import React from 'react';
import Header from './Header';
import HeaderControls from './HeaderControls';
import Description from './Description';
import Banner from './Banner';
import GaleryContainer from './GaleryContainer';
import ProductLineContainer from './ProductLineContainer';
import ProductInfoContainer from './ProductInfoContainer';
import PaymentContainer from './PaymentContainer';
import Content from './Content';
import Footer from './Footer';
import Instagram from './Instagram';

const MainContent = props => {
    return (
        <Content isModalHidden={ props.isModalHidden }>
            <Header></Header>
            <HeaderControls></HeaderControls>
            <Description></Description>
            <Banner></Banner>
            <GaleryContainer></GaleryContainer>
            <Instagram></Instagram>
            <ProductInfoContainer></ProductInfoContainer>
            <ProductLineContainer></ProductLineContainer>
            <PaymentContainer></PaymentContainer>
            <Footer></Footer>
        </Content>
    );
};

export default MainContent;