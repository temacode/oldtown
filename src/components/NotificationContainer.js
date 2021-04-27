import { connect } from 'react-redux';
import Notification from './Notification';

const mapStateToProps = state => ({
    isShowing: state.notification.isShowing,
    type: state.notification.type,
    message: state.notification.message,
    icon: state.notification.icon,
});

const NotificationContainer = connect(mapStateToProps)(Notification);

export default NotificationContainer;