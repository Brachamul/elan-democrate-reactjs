import React, { PropTypes } from 'react'

const Title = React.createClass({
	render: function(){
		if (this.props.titleLevel == 1) return(<h1>{this.props.title}</h1>)
		if (this.props.titleLevel == 2) return(<h2>{this.props.title}</h2>)
		if (this.props.titleLevel == 3) return(<h3>{this.props.title}</h3>)
		if (this.props.titleLevel == 4) return(<h4>{this.props.title}</h4>)
		if (this.props.titleLevel == 5) return(<h5>{this.props.title}</h5>)
		if (this.props.titleLevel == 6) return(<h6>{this.props.title}</h6>)
	}
})

//	propTypes: {
//		title: PropTypes.string,
//		titleLevel: PropTypes.number,
//	},

export default Title