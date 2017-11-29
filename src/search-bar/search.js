import React from 'react';

export default class Search extends React.Component {
	
	render() {
		let styles = {
			base: {
				fontSize: '1.8em',
				paddingRight: '40px',
				borderRadius: '5px',
				textAlign: 'left',
				width: '80%',
				display: 'inline-block',
			
			}
		}
    return (
    	<div className="inline">
    		<input type="text" onChange={this.props.onChange} style={styles.base}/>
    	</div>
    );
  }
}