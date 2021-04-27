import React from 'react';
import styled from 'styled-components/macro';
import { scrollElementDown } from '../helpers/scrollPayment';
import Extras from './Extras';
import typeHandler from '../helpers/typeHandler';

const InfoContainer = styled.div`
`;

const Name = styled.p`
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 20px;
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

const Portions = styled.p`
    margin-top: 20px;
    margin-bottom: 10px;
    i {
        margin-right: 5px;
    }
`;

const Price = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    margin-top: 10px;
`;

class PaymentInfo extends React.Component {
    constructor(props) {
        super(props);
        this.extraBlockRef  = '';

        this.setExtraBlockRef = elem => {
            this.extraBlockRef = elem;
        };
    }
    render() {
        const cakePrice = this.props.basket.product.price*this.props.weight;
        const extrasPrice = this.props.basket.selectedExtras.reduce((acc, cur) => {
            return acc+cur.price;
        }, 0);

        const price = cakePrice+extrasPrice;

        const triggerExtraHandler = () => {
            scrollElementDown(this.props.paymentRef);
            this.props.triggerExtra();
        };

        return (
            <InfoContainer>
                <Name>{this.props.basket.product.name}</Name>
                <Counter>
                    <IncreaseButton onMouseDown={ () => this.props.changeWeight(this.props.weight-1) }>
                        <i className="fas fa-minus"></i>
                    </IncreaseButton>
                    <p>{this.props.weight}{typeHandler(this.props.basket.product.type).dimension}</p>
                    <IncreaseButton onMouseDown={ () => this.props.changeWeight(this.props.weight+1) }>
                        <i className="fas fa-plus"></i>
                    </IncreaseButton>
                </Counter>
                {
                    this.props.basket.product.extras ?
                        <Extras basket={ this.props.basket }
                            addExtra={ this.props.addExtra }
                            deleteExtra={ this.props.deleteExtra }
                            triggerExtraHandler={ triggerExtraHandler }
                            changeWeight={ this.props.changeWeight }
                            isExtraHidden={ this.props.isExtraHidden }>
                        </Extras>
                        : ''
                }
                {
                    this.props.basket.product.type === 'cake'
                        ? <Portions>Примерно на {Math.floor(this.props.weight*1000/150)} человек</Portions>
                        : ''
                }
                <Price>Предоплата 50%: {Math.floor(price/2)}₽</Price>
            </InfoContainer>
        );
    }
}

export default PaymentInfo;