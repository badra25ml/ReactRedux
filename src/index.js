<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";

const API_KEY = config.MY_KEY;

YTSearch({key:API_KEY, term:"surfboards"}, function (data){
  console.log(data)
});
// Create a new component. This component should produce some HTML

const App = () => {
  return (<div>
  <SearchBar />
  </div>);
};

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector(".container"));
=======
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from "youtube-api-search";
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoListItem from './components/video_list_item';
import VideoDetail from './components/video_detail';

const API_KEY = config.MY_KEY;

class App extends Component {
  constructor (props){
    super (props);
    this.state = {videos:[],
      selectedVideo:null
    };
    this.videoSearch('San Francisco');
  }
  videoSearch (term) {
    YTSearch({key:API_KEY, term:term}, (videos) => {
      this.setState({videos:videos,
        selectedVideo:videos[0]});
      });
    }
    render (){
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
      return (<div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos = {this.state.videos}/>
        </div>);
      }
    };

    ReactDOM.render(<App/ >, document.querySelector('.container'));
>>>>>>> testing
