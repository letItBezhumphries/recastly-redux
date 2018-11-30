import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

const SEARCH_YOUTUBE_VIDEOS = 'SEARCH_YOUTUBE_VIDEOS';

export const searchYoutubeVideos = (videos) => {
  return {
    type: SEARCH_YOUTUBE_VIDEOS,
    videos
  };
};

const VIDEOS_FETCH_SUCCESS = 'VIDEOS_FETCH_SUCCESS';

export const videosFetchSuccess = (boolean) => {
  return {
    type: VIDEOS_FETCH_SUCCESS,
    videos
  };
};


const VIDEOS_FETCH_ERROR = 'VIDEOS_FETCH_ERROR';

export const videosFetchFailure = (err) => {
  return {
    type: VIDEOS_FETCH_ERROR,
    err,
  };
};

const VIDEOS_LOADING = 'VIDEOS_LOADING';

export const videosLoading = (boolean) => {
  return {
    type: VIDEOS_LOADING,
    boolean
  };
};

var handleVideoSearch = (q) => {
  return function(dispatch) {
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (items) => { dispatch(changeVideo(items[0]), dispatch(changeVideoList(items))); });     
  };
};

export default handleVideoSearch;