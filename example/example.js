var React = require('react');
var ReactDOM = require('react-dom');
import ReactHeatmap from '../lib/ReactHeatmap.js';

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactHeatmap
          className="heatmap"/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
