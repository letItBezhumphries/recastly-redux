import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';




var handleVideoSearch = (q) => {
//TODO:  Write an asynchronous action to handle a video search!

  return function(dispatch, getState) {
    // store.getState(searchYouTube(YOUTUBE_API_KEY, q), dispatch);
    return;
    // searchYouTube({YOUTUBE_API_KEY, q}, (items) => { return items; })
    // dispatch(fetchVideosFailure(error))
  };
};

export default handleVideoSearch;