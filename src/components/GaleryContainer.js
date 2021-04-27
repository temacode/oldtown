import Galery from './Galery';
import { connect } from 'react-redux';
import { loadGaleryThunkCreator } from '../reducers/mainReducer';

const mapStateToProps = state => ({
    galery: state.main.galery,
});

const mapDispatchToProps = dispatch => ({
    loadGalery: () => {
        dispatch(loadGaleryThunkCreator());
    },
});

const GaleryContainer = connect(mapStateToProps, mapDispatchToProps)(Galery);

export default GaleryContainer;