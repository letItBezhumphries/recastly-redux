import Redux from 'redux';

var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.videos;
  default:
    return state;
  } 
};

export default videoListReducer;
