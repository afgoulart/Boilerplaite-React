import {connect} from 'react-redux';
import Home from '../components/Home';
import {getPosts} from '../actions/post.action';

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const dispatchToProps = (dispatch)=> ({
    dispatch
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    getPosts: () => dispatchProps.dispatch(getPosts())
});

export default connect(mapStateToProps, dispatchToProps, mergeProps)(Home);