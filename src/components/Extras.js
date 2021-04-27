import React from 'react';
import styled from 'styled-components/macro';

const ExtraBlock = styled.div`
    background: #eaeaea;
    border-radius: 6px;
    padding: 10px;
    font-weight: 700;
    cursor: pointer;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ExtraList = styled.div`
    width: 100%;
    height: ${({ isExtraHidden }) => isExtraHidden ? '0' : 'auto'};
    overflow: scroll;
    transition: 0.3s;
`;

const Chevron = styled.i`
    font-size: 24px;
    transform: ${({ closed }) => closed ? 'rotate(0deg)' : 'rotate(90deg)'};
    transform-origin: center;
    margin-right: 3px;
`;

const Extra = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    border: 1px solid #eaeaea;
    border-radius:  6px;
    padding: 8px;
`;

const ExtraName = styled.p`
    font-weight: 600;
    margin-bottom: 20px;
    max-width: 50%;
    font-size: 16px;
    margin: 0;
`;

const Counter = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`;

const IncreaseButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 6px;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 24px;
    cursor: pointer;
    background: #eaeaea;
`;

const AddButton = styled.div`
    padding: 8px 16px;
    background: #eaeaea;
    border-radius: 6px;
    cursor: pointer;
`;

const Extras = props => {
    const extrasList = props.basket.product.extras.map((e, i) => {
        let num = 0;
        num = props.basket.selectedExtras.filter(extra => extra.id === e.id).length;

        if (num > 0) {
            return (
                <Extra  key={ i }>
                    <ExtraName>{e.name} - {e.price}₽</ExtraName>
                    <Counter>
                        <IncreaseButton onClick={
                            ()=> props.deleteExtra(props.basket.selectedExtras, e.id)
                        }>
                            <i className="fas fa-minus"></i>
                        </IncreaseButton>
                        <p>{num*e.portion} {e.dimension}</p>
                        <IncreaseButton onClick={
                            () => props.addExtra(props.basket.selectedExtras, e)
                        }>
                            <i className="fas fa-plus"></i>
                        </IncreaseButton>
                    </Counter>
                </Extra>
            );
        }
        return (
            <Extra  key={ i }>
                <ExtraName>{e.name} - {e.price}₽</ExtraName>
                <AddButton onClick={
                    () => props.addExtra(props.basket.selectedExtras, e)
                }>
                    Добавить
                </AddButton>
            </Extra>
        );
    });
    return (
        <>
            <ExtraBlock onClick={ props.triggerExtraHandler }>
                Дополнительно
                <Chevron closed={ props.isExtraHidden } className="fas fa-caret-right">
                </Chevron>
            </ExtraBlock>
            <ExtraList isExtraHidden={ props.isExtraHidden }
                num={ extrasList.length }>

                {extrasList}
            </ExtraList>
        </>
    );
};

export default Extras;