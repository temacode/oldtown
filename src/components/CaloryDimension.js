import React from 'react';
import styled from 'styled-components/macro';

const handleCaloriesSize = size => {
    if (size < 200) {
        return {
            size: '20%',
            color: '#7CC098',
        };
    }
    if (size > 380) {
        return {
            size: '90%',
            color: '#667EEB',
        };
    }
    return {
        size: '50%',
        color: '#E390AF',
    };
};

const handleTooltip = tooltip => {
    switch (tooltip) {
        case 'milk': {
            return 'Без молока';
        }
        case 'nuts': {
            return 'С орехами';
        }
        case 'berry': {
            return 'С ягодами';
        }
        case 'gmo': {
            return 'Без ГМО';
        }
        case 'chocolate': {
            return 'С шоколадом';
        }
        default: {
            return '';
        }
    }
};

const CaloryBlock = styled.div`
    width: 100%;
    height: 35px;
    border-radius: 6px;
    border: 1px solid #eaeaea;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const CaloriesLine = styled.div`
    position: relative;
    width: 100%;
    border-radius: 6px;
    ::before {
        display: block;
        content: '';
        border-radius: 6px 0 0 6px;
        width: ${({ size }) => handleCaloriesSize(size).size};
        background: ${({ size }) => handleCaloriesSize(size).color};
        height: 100%;
    }
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 8px;
`;

const Kkals = styled.p`
    color: #595959;
`;

const Image = styled.div`
    position: relative;
    margin: auto 5px;
    cursor: pointer;
    img {
        width: 20px;
    }
    :hover::before {
        position: absolute;
        content: ${({ tooltip }) => `'${handleTooltip(tooltip)}'`};
        display: block;
        padding: 8px 16px;
        background: rgba(0, 0, 0, 0.68);
        border-radius: 6px;
        color: white;
        font-weight: 600;
        white-space: nowrap;
        top: -40px;
        transform: translateX(-50%);
    }
`;

const CaloryDimension = ({ kkals, options }) => {
    const optionsImages = options.reverse().map((e, i) => {
        return (
            <Image key={ i } tooltip={ e }>
                <img data-src={ '/icons/'+e+'.png' } className="lazyload" alt="" />
            </Image>
        );
    });
    return (
        <CaloryBlock>
            <CaloriesLine size={ kkals }></CaloriesLine>
            <Info>
                <Kkals>{ kkals }ккал</Kkals>
                {optionsImages}
            </Info>
        </CaloryBlock>
    );
};

export default CaloryDimension;