import { connect } from 'react-redux';
import MainContent from './MainContent';
import { changeModalActionCreator } from '../reducers/mainReducer';

const mapStateToProps = state => ({
    isModalHidden: state.main.isModalHidden,
});

const mapDispatchToProps = dispatch => ({
    changeModal: () => {
        dispatch(changeModalActionCreator());
    },
});

const MainContentContainer = connect(mapStateToProps, mapDispatchToProps)(MainContent);

export default MainContentContainer;