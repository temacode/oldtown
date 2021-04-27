import { connect } from 'react-redux';
import PaymentInfo from './PaymentInfo';
import {
    triggerExtraActionCreator,
} from '../reducers/paymentReducer';
import {
    addExtraThunkCreator,
    deleteExtraThunkCreator,
    changeWeightThunkCreator,
} from '../reducers/basketReducer';

const mapStateToProps = state => ({
    basket: {
        product: state.basket.product,
        selectedExtras: state.basket.selectedExtras,
    },
    isExtraHidden: state.payment.isExtraHidden,
    weight: state.basket.weight,
});

const mapDispatchToProps = dispatch => ({
    triggerExtra: () => {
        dispatch(triggerExtraActionCreator());
    },
    changeWeight: value => {
        dispatch(changeWeightThunkCreator(value));
    },
    addExtra: (extras, item) =>  {
        dispatch(addExtraThunkCreator(extras, item));
    },
    deleteExtra: (extras, id) => {
        dispatch(deleteExtraThunkCreator(extras, id));
    },
});

const PaymentInfoContainer = connect(mapStateToProps, mapDispatchToProps)(PaymentInfo);

export default PaymentInfoContainer;