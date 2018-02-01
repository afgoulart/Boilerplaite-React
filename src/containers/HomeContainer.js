import {connect} from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const dispatchToProps = (dispatch)=> ({
    dispatch
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...dispatchProps,
    ...stateProps
});

export default connect(mapStateToProps, dispatchToProps, mergeProps)(Home);