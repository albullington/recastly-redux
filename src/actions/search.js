import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import store from '../store/store.js';

var handleVideoSearch = (q) => {

  return (dispatch) => {
    searchYouTube({ key: YOUTUBE_API_KEY, query: q }, (res) => {
      return (dispatch) => {
        changeVideoList(res);
        changeVideo(res);
      };
    });
  };
};

export default handleVideoSearch;
