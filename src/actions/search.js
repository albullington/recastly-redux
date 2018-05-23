import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import store from '../store/store.js';

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  // return (dispatch) => {
  //   setTimeout(() => {
  //     dispatch(searchYouTube(q));
  //   }, 2000);
  // };
};

export default handleVideoSearch;
