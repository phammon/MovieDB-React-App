import React from 'react';
import Lightbox from 'react-images';
import Gallery from 'react-grid-gallery';

export default class Thumbnails extends React.Component {

	render() {

     return (
   		<Gallery images={this.props.img} />
 
    );
  }
}