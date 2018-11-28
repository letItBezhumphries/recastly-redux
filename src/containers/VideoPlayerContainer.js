import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
// import { changeVideo } from '.../actions/changeVideo.js';
// import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
  //whatever is returned here will show up as props inside of VideoPlayer
  return {
    video: state.currentVideo
  };
};

//whatever is returned from this function will end up as props on the VideoPlayer Container
// const mapDispatchToProps = (dispatch) => {
//   //whenever changeVideo is called the result should be passed to all our reducers
//   return bindActionCreators({ changeVideo: changeVideo }, dispatch);
// };

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

// var VideoPlayerContainer = connect(mapStateToProps({ currentVideo: video }))(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;