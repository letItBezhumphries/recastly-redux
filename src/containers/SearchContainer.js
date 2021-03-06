import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';
import changeVideo from '../actions/currentVideo.js';

const mapStateToProps = (state) => {
  return {
    videos: state.videoList, 
    video: state.currentVideo
  };
};

const mapDispatchToProps = (dispatch) => {
  return { 
    handleSearchInputChange: (query) => {
      dispatch(handleVideoSearch(query));   
    }  
  };
};

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;



