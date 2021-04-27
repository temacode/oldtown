import { connect } from 'react-redux';
import ProductInfo from './ProductInfo';
import { hideProductInfoThunkCreator } from '../reducers/mainReducer';

const mapStateToProps = state => ({
    isHidden: state.main.productInfo.isHidden,
    path: state.main.productInfo.path,
    structure: state.main.productInfo.structure,
});

const mapDispatchToProps = dispatch => ({
    hideProductInfo: () => {
        dispatch(hideProductInfoThunkCreator());
    },
});

const ProductInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProductInfo);

export default ProductInfoContainer;