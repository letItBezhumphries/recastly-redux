import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

// const ROOT_URL = `https://www.googleapis.com/youtube/v3/search?${YOUTUBE_API_KEY}`;

export const videosFetchSuccess = (videos) => {
  return {
    type: 'GET_YOUTUBE_VIDEOS',
    videos
  };
};

export const videosFetchFailure = (err) => {
  return {
    type: 'VIDEOS_FETCH_FAILURE',
    err,
  };
};

export const videosFetchLoading = (boolean) => {
  return {
    type: 'VIDEOS_IS_LOADING',
    boolean
  };
};

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  return function(dispatch, getState) {
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (items) => { dispatch(changeVideo(items[0]), dispatch(changeVideoList(items))); });    
    // searchYouTube({key: YOUTUBE_API_KEY, query: q}).then(
    //   videos => dispatch(changeVideo(videos[0]), 
    //     dispatch(changeVideoList(videos)), 
    //     err => dispatch(videosFetchFailure(err)))
    // ); 
  };
};





// searchYouTube({YOUTUBE_API_KEY, q}, (items) => { 
//   dispatch(
//     { type: GET_YOUTUBE_VIDEOS, payload: items },
//     { type: VIDEOS_FETCH_ERROR, payload: err },
//     { type: VIDEOS_LOADING, payload: boolean } 
//   );
// }, 200); 
// return searchYouTube({YOUTUBE_API_KEY, q}).then(
//   videos => dispatch(changeVideo(videos[0]), 
//     dispatch(changeVideoList(vidoes)), 
//     err => dispatch(videosFetchFailure(err)))
// );  




export default handleVideoSearch;