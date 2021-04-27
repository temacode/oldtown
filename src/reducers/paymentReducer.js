import { changeModalActionCreator } from './mainReducer';
import axios from 'axios';
import { addProductThunkCreator } from './basketReducer';
import { showNotificationThunkCreator } from './notificationReducer';

const SHOW_PAYMENT = 'SHOW_PAYMENT';
const HIDE_PAYMENT = 'HIDE_PAYMENT';
const TRIGGER_EXTRA = 'TRIGGER_EXTRA';
const SET_PAYMENT_STATUS = 'SET_PAYMENT_STATUS';
const SET_LOADING = 'SET_LOADING';

const initialState = {
    isHidden: true,
    isExtraHidden: true,
    paymentStatus: null,
    isPaymentSuccess: false,
    isLoading: false,
    orderNumber: null,
};

let paymentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING: {
            let updatedState = { ...state };
            updatedState.isLoading = action.payload;

            return updatedState;
        }
        case SHOW_PAYMENT: {
            let updatedState = { ...state };
            updatedState.isHidden = false;

            return updatedState;
        }
        case HIDE_PAYMENT: {
            let updatedState = { ...state };
            updatedState.isHidden = true;

            return updatedState;
        }
        case TRIGGER_EXTRA: {
            let updatedState = { ...state };
            updatedState.isExtraHidden = !state.isExtraHidden;

            return updatedState;
        }
        case SET_PAYMENT_STATUS: {
            let updatedState = { ...state };
            updatedState.paymentStatus = action.payload.status;
            updatedState.isPaymentSuccess = action.payload.isPaymentSuccess;
            updatedState.orderNumber = action.payload.orderNumber;

            return updatedState;
        }
        default: {
            return state;
        }
    }
};

const setLoadingActionCreator = payload => ({
    type: SET_LOADING,
    payload: payload,
});

const showPaymentActionCreator = () => ({
    type: SHOW_PAYMENT,
});

export const showPaymentThunkCreator = (product, selectedExtras, weight) => dispatch => {
    dispatch(changeModalActionCreator());
    if (product) {
        dispatch(addProductThunkCreator(product, selectedExtras, weight));
    }
    dispatch(showPaymentActionCreator());
};

const hidePaymentActionCreator = () => ({
    type: HIDE_PAYMENT,
});

export const hidePaymentThunkCreator = () =>  dispatch => {
    dispatch(changeModalActionCreator());
    dispatch(hidePaymentActionCreator());
};

export const submitPaymentThunkCreator = data => dispatch => {
    dispatch(setLoadingActionCreator(true));
    //здесь нужно на время процессинга закрыть форму
    axios.post('/api/payment', {
        firstName: data.firstName,
        email: data.email,
        tel: data.tel,
        basket: data.basket,
    })
        .then(res => {
            dispatch(setLoadingActionCreator(false));
            window.location.replace(res.data.formUrl);
        })
        .catch(err => {
            dispatch(setLoadingActionCreator(false));
            console.log(err.response);
            dispatch(showNotificationThunkCreator({
                message: err.response.data.error,
                type: 'error',
            }));
        });
};

const setPaymentStatusActionCreator = payload => ({
    type: SET_PAYMENT_STATUS,
    payload: payload,
});

export const checkPaymentThunkCreator = orderId => dispatch => {
    console.log('Обращегние к серверу');

    /* //Это для дебага

    dispatch(showNotificationThunkCreator({
        message: 'Оплата произведена успешно, проверьте почту',
        type: 'success',
    }));

    dispatch(setPaymentStatusActionCreator({ status: 2, isPaymentSuccess: true, orderNumber: 52342 }));
    dispatch(addProductThunkCreator(
        { name: 'Бисквитный' },
        [ { name: 'Доп 1' }, { name: 'Доп 1' }, { name: 'Доп 1' } ],
    ));

    //Это для дебага */
    axios.get(`/api/payment/${orderId}`)
        .then(res => {
            console.log(res.data);
            const status = res.data.status;
            const orderNumber = res.data.orderNumber;
            const basket = res.data.basket;
            let isPaymentSuccess;
            switch (status) {
                case 2: {
                    isPaymentSuccess = true;
                    dispatch(showNotificationThunkCreator({
                        message: 'Оплата произведена успешно, проверьте почту',
                        type: 'success',
                    }));
                    break;
                }
                default: {
                    isPaymentSuccess = false;
                    dispatch(showNotificationThunkCreator({
                        message: 'Оплата не прошла, вернитесь и попробуйте еще раз',
                        type: 'error',
                    }));
                }
            }
            dispatch(setPaymentStatusActionCreator({
                status: status,
                isPaymentSuccess: isPaymentSuccess,
                orderNumber: orderNumber,
            }));
            dispatch(addProductThunkCreator(basket.product, basket.selectedExtras, basket.weight));
        })
        .catch(err => {
            dispatch(showNotificationThunkCreator({
                message: 'Не удалось проверить транзакцию, обновите страницу',
                type: 'error',
            }));
            console.log(err);
        });
};

export const triggerExtraActionCreator = () => ({
    type: TRIGGER_EXTRA,
});

export default paymentReducer;
