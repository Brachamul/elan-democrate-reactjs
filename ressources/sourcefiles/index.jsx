import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootAppReducers from './reducers'

//	Prereq for Material UI
//	import injectTapEventPlugin from 'react-tap-event-plugin';
//	injectTapEventPlugin();


let store = createStore( rootAppReducers, applyMiddleware(thunk) )

window.apiRoot = 'http://localhost:8000'

//	dispatch(LogIn({text: 'Asks the server for an authentication token'}))

const Board = React.createClass({
	loadCardsFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			mimetype: 'application/json',
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: {"results": []} };
	},
	componentDidMount: function() {
		this.loadCardsFromServer();
		setInterval(this.loadCardsFromServer, this.props.pollInterval);
	},
	render: function() {
		var cards = this.state.data.results.map(function(card) {
			return (
				<Card
				key={card.slug}
				title={card.title}
		/*		tags={card.tags}
				people={card.people}
				timeRemaining={card.timeRemaining} */
				></Card>
			);
		});
		return (
			<div className="board">
				<h2 className="board__title">{this.props.title}</h2>
				{cards}
			</div>
		);
	}
});

const Card = React.createClass({
	render: function() {
		return (
			<article className="card">
				<h3 className="card__title">{this.props.title}</h3>
			{/*	<TagList data={this.props.tags}></TagList> */}
			</article>
		);
	}
})

const TagList = React.createClass({
	render: function() {
		var tags = this.props.data.map(function(tag) {
			return ( <span className="card__tag" slug={tag.slug} key={tag.slug} >{tag.text}</span> );
		});
		return ( <p className="card__tags">{tags}</p> );
	}
})

const PropositionForm = React.createClass({
	render: function() {
		return (
			<form id="get-form" className="pull-right">
				<fieldset>
					<div className="btn-group format-selection">
						<a className="btn btn-primary js-tooltip" href="/propositions/" rel="nofollow" title="Make a GET request on the Proposition List resource">GET</a>
						<button className="btn btn-primary dropdown-toggle js-tooltip" data-toggle="dropdown" title="Specify a format for the GET request">
							<span className="caret"></span>
						</button>
						<ul className="dropdown-menu">
							<li>
								<a className="js-tooltip format-option" href="/propositions/?format=json" rel="nofollow" title="Make a GET request on the Proposition List resource with the format set to `json`">json</a>
							</li>
							<li>
								<a className="js-tooltip format-option" href="/propositions/?format=api" rel="nofollow" title="Make a GET request on the Proposition List resource with the format set to `api`">api</a>
							</li>
						</ul>
					</div>
				</fieldset>
			</form>
		);
	}
})


import App from './containers/_AppContainer'
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))

window.store = store