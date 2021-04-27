import React from 'react';
import styled from 'styled-components/macro';
import HeaderText from './HeaderText';

const GaleryContainer = styled.div`
    display: flex;
    overflow: scroll;
    padding-left: 0;
`;

const ImageBlock = styled.div`
    min-width: 250px;
    max-height: 300px;
    border-radius: 12px;
    overflow: hidden;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
    img {
        align-self: center;
    }
`;

const Image = styled.img`
    align-self: center;
    width: ${props => props.size === 'width' ? '100%' : 'auto'};
    height: ${props => props.size === 'height' ? '100%' : 'auto'};
`;

class Galery extends React.Component {
    componentDidMount() {
        this.props.loadGalery();
    }

    render() {
        const galery = this.props.galery.map((e, i) => {
            return (
                <ImageBlock key={ i }>
                    <Image data-src={ '/galery/' + e.path } className="lazyload" alt="" size={ e.size }></Image>
                </ImageBlock>);
        });
        return (
            <>
                <HeaderText>Галерея</HeaderText>
                <GaleryContainer>
                    {galery}
                </GaleryContainer>
            </>
        );
    }
}

export default Galery;
