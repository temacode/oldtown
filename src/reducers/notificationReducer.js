const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

const initialState = {
    isShowing: false,
    message: '',
    icon: '',
    type: '',
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION: {
            let updatedState = { ...state };
            updatedState.isShowing = true;
            updatedState.message = action.payload.message;
            updatedState.icon = action.payload.icon || '📬';
            updatedState.type = action.payload.type || 'regular';

            return updatedState;
        }
        case HIDE_NOTIFICATION: {
            let updatedState = { ...state };
            updatedState.isShowing = false;
            updatedState.message = '';
            updatedState.icon = '';
            updatedState.type = '';

            return updatedState;
        }
        default:
            return state;
    }
};

const hideNotificationActionCreator = () => ({
    type: HIDE_NOTIFICATION,
});

const showNotificationActionCreator = payload => ({
    type: SHOW_NOTIFICATION,
    payload: payload,
});

export const showNotificationThunkCreator = ({ message, icon, type }) => dispatch => {
    const data = {
        message: message,
        icon: icon,
        type: type,
    };
    dispatch(showNotificationActionCreator(data));
    setTimeout(() => {
        dispatch(hideNotificationActionCreator());
    }, 3000);
};

export default notificationReducer;