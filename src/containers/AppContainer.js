import {connect} from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state, {match: {params: {route}}}) => {

    return {
        route,
        // ...state
    }
}

const dispatchToProps = (dispatch)=> ({
    dispatch
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...dispatchProps,
    ...stateProps
});

export default connect(mapStateToProps, dispatchToProps, mergeProps)(App);