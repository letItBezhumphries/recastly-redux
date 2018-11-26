import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStateToProps = (state) => {

};


var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

// var VideoPlayerContainer = connect(mapStateToProps({ currentVideo: video }))(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
