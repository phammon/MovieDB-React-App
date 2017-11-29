import React from 'react';
import Gallery from 'react-grid-gallery';

export default class Movie extends React.Component {
	
	render() {
    return (
          <Gallery id="firstMovie" images={this.props.img}/>
    );
  }
}