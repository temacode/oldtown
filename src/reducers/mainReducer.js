import axios from 'axios';

const LOAD_GALERY = 'LOAD_GALERY';
const LOAD_PRODUCT = 'LOAD_PRODUCT';
const SHOW_PRODUCT_INFO = 'SHOW_PRODUCT_INFO';
const HIDE_PRODUCT_INFO = 'HIDE_PRODUCT_INFO';
const CHANGE_MODAL = 'CHANGE_MODAL';

const initialState = {
    galery: [],
    products: [],
    isModalHidden: true,
    productInfo: {
        isHidden: true,
        path: '',
        structure: [],
    },
};

let mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_GALERY: {
            let galeryState = { ...state };
            galeryState.galery = action.payload;

            return galeryState;
        }
        case LOAD_PRODUCT: {
            let productState = { ...state };
            productState.products = action.payload;

            return productState;
        }
        case CHANGE_MODAL: {
            let modalState = { ...state };
            modalState.isModalHidden = !modalState.isModalHidden;

            return modalState;
        }
        case SHOW_PRODUCT_INFO: {
            let productInfoState = { ...state };
            productInfoState.productInfo.isHidden = false;
            productInfoState.productInfo.path = action.payload.path;
            productInfoState.productInfo.structure = action.payload.structure;

            return productInfoState;
        }
        case HIDE_PRODUCT_INFO: {
            let hideProductInfoState = { ...state };
            hideProductInfoState.productInfo.isHidden = true;

            return hideProductInfoState;
        }
        default:
            return state;
    }
};

const loadGaleryActionCreator = payload => ({
    type: LOAD_GALERY,
    payload: payload,
});

export const loadGaleryThunkCreator = () => dispatch => {
    axios.get('/api/galery').then(res => {
        dispatch(loadGaleryActionCreator(res.data));
    });
};

const loadProductActionCreator = payload => ({
    type: LOAD_PRODUCT,
    payload: payload,
});

export const loadProductThunkCreator = () => dispatch => {
    axios.get('/api/product').then(res => {
        const products = res.data.products;
        console.log('Загрузка продуктов', res.data);
        dispatch(loadProductActionCreator(products));
    });
};

const showProductInfoActionCreator = payload => ({
    type: SHOW_PRODUCT_INFO,
    payload: payload,
});

const hideProductInfoActionCreator = () => ({
    type: HIDE_PRODUCT_INFO,
});

export const changeModalActionCreator = () => ({
    type: CHANGE_MODAL,
});

export const showProductInfoThunkCreator = info => dispatch => {
    dispatch(changeModalActionCreator());
    dispatch(showProductInfoActionCreator({ ...info }));
};

export const hideProductInfoThunkCreator = () => dispatch => {
    dispatch(hideProductInfoActionCreator());
    dispatch(changeModalActionCreator());
};

export default mainReducer;