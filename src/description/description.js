import React from 'react';
import Radium, { Style } from 'radium';


class Description extends React.Component {

	render() {
    return (
    	<div>
    		<p>{this.props.description}</p>
	    </div>
    );
   }
 }

 export default Description;