import ProductLine from './ProductLine';
import { connect } from 'react-redux';
import { loadProductThunkCreator, showProductInfoThunkCreator } from '../reducers/mainReducer';
import { showPaymentThunkCreator } from '../reducers/paymentReducer';

const mapStateToProps = state => ({
    products: state.main.products,
});

const mapDispatchToProps = dispatch => ({
    loadProduct: () => {
        dispatch(loadProductThunkCreator());
    },
    showProduct: productInfo => {
        dispatch(showProductInfoThunkCreator(productInfo));
    },
    showPayment: (product, selectedExtras) => {
        dispatch(showPaymentThunkCreator(product, selectedExtras));
    },
});

const ProductLineContainer = connect(mapStateToProps, mapDispatchToProps)(ProductLine);

export default ProductLineContainer;