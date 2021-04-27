const ADD_PRODUCT = 'ADD_PRODUCT';
const CHANGE_WEIGHT = 'CHANGE_WEIGHT';
const ADD_EXTRA = 'ADD_EXTRA';
const DELETE_EXTRA = 'DELETE_EXTRA';

const initialState = {
    product: null,
    selectedExtras: [],
    weight: 1,
};

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            let updatedState = { ...state };
            updatedState.product = action.payload.product;
            updatedState.selectedExtras = action.payload.selectedExtras;
            updatedState.weight = action.payload.weight;

            return updatedState;
        }
        case CHANGE_WEIGHT: {
            let updatedState = { ...state };
            updatedState.weight = action.payload;

            return updatedState;
        }
        case ADD_EXTRA: {
            let updatedState = { ...state };
            updatedState.selectedExtras = [ ...state.selectedExtras, action.payload ];

            return updatedState;
        }
        case DELETE_EXTRA: {
            let updatedState = { ...state };
            updatedState.selectedExtras = action.payload;

            return updatedState;
        }
        default: {
            return state;
        }
    }
};

const addProductActionCreator = payload => ({
    type: ADD_PRODUCT,
    payload: payload,
});

export const addProductThunkCreator = (product, selectedExtras, weight) => dispatch => {
    dispatch(addProductActionCreator({ product: product, selectedExtras: selectedExtras || [], weight: weight || 1 }));
};

const changeWeightActionCreator = payload => ({
    type: CHANGE_WEIGHT,
    payload: payload,
});

export const changeWeightThunkCreator = value => dispatch => {
    let filteredValue = Math.floor(value);
    filteredValue = filteredValue <= 1 ? 1 : filteredValue;

    dispatch(changeWeightActionCreator(filteredValue));
};

const addExtraActionCreator = payload => ({
    type: ADD_EXTRA,
    payload: payload,
});

export const addExtraThunkCreator = (extras, item) => dispatch => {
    const basket = extras.filter(e => e.id === item.id);

    if (item.maxValue && basket.length >= item.maxValue) {
        return;
    }

    dispatch(addExtraActionCreator(item));
};

const deleteExtraActionCreator = payload =>({
    type: DELETE_EXTRA,
    payload: payload,
});

export const deleteExtraThunkCreator = (extras, id) => dispatch => {
    const basket = extras.filter((e, i) => i !== extras.findIndex(elem => elem.id === id));

    dispatch(deleteExtraActionCreator(basket));
};

export default basketReducer;