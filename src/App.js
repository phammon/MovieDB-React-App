import React from 'react';
import Search from './search-bar/search';
import Movie from './render-movie/movie';
import Rating from './rating/rating';
import Thumbnails from './thumbnails/thumbnails';
import './App.css';
import './index.css';
import Radium, { Style } from 'radium';
import Button from './button/button';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        index: 0,
        loading: true,
        isOpen: false,
       };
    // this.componentDidMount=this.componentDidMount.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.manipulateQueries=this.manipulateQueries.bind(this);
    }
  handleChange(e) {
    if (e.target.value === "") {
      return;
    } else {
    this.setState({ 
      input: e.target.value 
    })
   }
  }
  componentDidMount() {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=def6a8b00cc6fc7b3f0c91f8e4bd4e9c&language=en-US&page=1&region=en').then((response) => {
               return response.json();
        }).then((obj) => {
        this.setState({
          loading: false,
          poster: 'http://image.tmdb.org/t/p/w300//' + obj.results[0].poster_path,
          title: obj.results[0].title,
          votes: obj.results[0].vote_average,
          overview: obj.results[0].overview,
          data: obj.results[0].release_date,
          queries: [obj.results[0], obj.results[1], obj.results[2], obj.results[3], obj.results[4], obj.results[5], obj.results[6], obj.results[7], obj.results[8], obj.results[9]]
        })
    })
  }
  handleClick() {
    if(this.state.input === undefined) {
      return;
     }else {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=def6a8b00cc6fc7b3f0c91f8e4bd4e9c&query=' + this.state.input + '&page=1').then((response) => {
          return response.json();
        }).then((obj) => {
          console.log(obj)
        if(obj.results[0] === undefined){
          this.renderDefault();
          alert('sorry this search yieled no results, try again');
        } else if(obj.results[0].poster_path === null){
          this.renderDefault();
          alert('sorry this search yielded no results, please search again');
        }else{
        this.setState({
          loading: false,
          poster: 'http://image.tmdb.org/t/p/w300//' + obj.results[0].poster_path,
          title: obj.results[0].title,
          votes: obj.results[0].vote_average,
          overview: obj.results[0].overview,
          data: obj.results[0].release_date,
          queries: [obj.results[0], obj.results[1], obj.results[2], obj.results[3], obj.results[4], obj.results[5], obj.results[6], obj.results[7], obj.results[8], obj.results[9]]
           })
          }
        })
     }  
  }
  renderLoading() {
    return <div>Loading .... </div>;
  }
  renderMovie() {
    return(
    <div id="center">
        <div className='row'>
          <Search onChange={this.handleChange}/> 
          <Button onClick={this.handleClick}/>
        </div>
          <Movie img={this.manipulateQueries()} title={this.state.title} summary={this.state.overview} rating={this.state.votes}/>
    </div>
    );
  }
  //used map to convert data into array of objects for Lightbox/react-images to use. 
  manipulateQueries() {
    let oldArr = this.state.queries;
    let noUndefines = oldArr.filter(i => { return i !== undefined })
    let havePosters = noUndefines.filter(i => { return i.poster_path !== null})
    let newArr = havePosters.map(i => {
      return  {src: 'http://image.tmdb.org/t/p/w300//' + i.poster_path,
              thumbnail: 'http://image.tmdb.org/t/p/w300//' + i.poster_path,
              thumbnailWidth: 180,
              thumbnailHeight: 260}
       });


    return newArr;
  };
  renderDefault() {
     fetch('https://api.themoviedb.org/3/movie/popular?api_key=def6a8b00cc6fc7b3f0c91f8e4bd4e9c&language=en-US&page=1&region=en').then((response) => {
               return response.json();
        }).then((obj) => {
        this.setState({
          loading: false,
          poster: 'http://image.tmdb.org/t/p/w300//' + obj.results[0].poster_path,
          title: obj.results[0].title,
          votes: obj.results[0].vote_average,
          overview: obj.results[0].overview,
          data: obj.results[0].release_date,
          queries: [obj.results[0], obj.results[1], obj.results[2], obj.results[3], obj.results[4], obj.results[5], obj.results[6], obj.results[7], obj.results[8], obj.results[9]]
        })
    })
  }
  render() {
    if(this.state.loading) {
      return this.renderLoading();
    } else {
      return this.renderMovie();
    }
  }
}

export default App;