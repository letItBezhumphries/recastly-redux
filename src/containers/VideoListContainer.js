import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';

const mapStateToProps = (state) => {
  return {

    videos: state.videos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: () => {
      dispatch(changeVideo);
    }
  };
};


var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
/* VideoList cares about when the list of videos changes


// const mapStateToProps = state => {
//   return {
//     videos: state.videos
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
    handleVideoListEntryTitleClick: () => {
      dispatch(changeVideo(video));
    }
  };
// };

var VideoListContainer = connect(
  mapStateToProps(state.videos), 
  mapDispatchToProps(changeVideo(video)))(VideoList);
*/

export default VideoListContainer;
