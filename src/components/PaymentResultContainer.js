import { connect } from 'react-redux';
import { checkPaymentThunkCreator, showPaymentThunkCreator } from '../reducers/paymentReducer';
import PaymentResult from './PaymentResult';

const mapStateToProps = state => ({
    paymentStatus: state.payment.paymentStatus,
    isPaymentSuccess: state.payment.isPaymentSuccess,
    orderNumber: state.payment.orderNumber,
    product: state.basket.product,
    selectedExtras: state.basket.selectedExtras,
    isModalHidden: state.main.isModalHidden,
});

const mapDispatchToProps = dispatch => ({
    checkPayment: orderId => {
        dispatch(checkPaymentThunkCreator(orderId));
    },
    showPayment: () => {
        dispatch(showPaymentThunkCreator());
    },
});

const PaymentResultContainer = connect(mapStateToProps, mapDispatchToProps)(PaymentResult);

export default PaymentResultContainer;