import { connect } from 'react-redux';
import Payment from './Payment';
import {
    hidePaymentThunkCreator,
    submitPaymentThunkCreator,
} from '../reducers/paymentReducer';

const mapStateToProps = state => ({
    isHidden: state.payment.isHidden,
    isExtraHidden: state.payment.isExtraHidden,
    product: state.basket.product,
    weight: state.basket.weight,
    selectedExtras: state.basket.selectedExtras,
    isLoading: state.payment.isLoading,
});

const mapDispatchToProps = dispatch => ({
    hidePayment: () => {
        dispatch(hidePaymentThunkCreator());
    },
    submitPayment: data => {
        dispatch(submitPaymentThunkCreator(data));
    },
});

const PaymentContainer = connect(mapStateToProps, mapDispatchToProps)(Payment);

export default PaymentContainer;