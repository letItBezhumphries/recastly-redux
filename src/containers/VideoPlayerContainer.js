import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


const mapStateToProps = (state) => {
  //whatever is returned here will show up as props inside of VideoPlayer
  return {
    video: state.currentVideo
  };
};

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

export default VideoPlayerContainer;