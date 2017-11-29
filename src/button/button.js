import React from 'react';
import Radium, { Style } from 'radium';


class Button extends React.Component {

	render() {
		var styles = {
		  base: {
		    background: '#0C7AC8',
		    width: '80px',
		    border: 0,
		    borderRadius: 4,
		    color: 'white',
		    padding: '1.3em',
		    textDecoration: 'none',
		    outline: 'none',
		   

		      ':hover': {
		      background: '#81cefd'
		    }
		  }
		};
    return (
	      <input type="submit" style={styles.base} onClick={this.props.onClick} value="Search" />
    );
   }
 }

 Button = Radium(Button);
 export default Button;