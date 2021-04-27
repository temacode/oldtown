import React from 'react';
import styled from 'styled-components/macro';
import PaymentForm from './PaymentForm';
import PaymentInfoContainer from './PaymentInfoContainer';

const Modal = styled.div`
    transition: 0.3s;
    position: fixed;
    z-index: 4;
    width: 90%;
    background: white;
    opacity: 1;
    max-height: 90%;
    bottom: ${({ isHidden }) => isHidden ? '-100%' : '40px'};
    left: 50%;
    transform: translateX(-50%);
    border-radius: 12px;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
    overflow: scroll;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;

    @media screen and (min-width: 759px) {
        width: 50%;
    }
`;

class Payment extends React.Component {
    constructor(props) {
        super(props);

        this.paymentRef = '';
        this.setPaymentRef = elem => {
            this.paymentRef = elem;
        };
    }
    render() {
        const submitHandler = data => {
            data.basket = {
                product: this.props.product,
                weight: this.props.weight,
                selectedExtras: this.props.selectedExtras,
            };

            this.props.submitPayment(data);
        };

        return (
            <Modal isHidden={ this.props.isHidden }
                ref={ this.setPaymentRef }>

                {
                    this.props.isHidden ?
                        ''
                        : <PaymentInfoContainer paymentRef={ this.paymentRef }></PaymentInfoContainer>
                }

                <PaymentForm isLoading={ this.props.isLoading }
                    hidePayment={ this.props.hidePayment }
                    onSubmit={ submitHandler }>
                </PaymentForm>
            </Modal>
        );
    }
}

export default Payment;