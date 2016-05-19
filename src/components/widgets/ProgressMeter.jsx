'use strict'

import React from 'react';
import ReactDOM from 'react-dom';


class ProgressMeter extends React.Component {

	static propTypes = {
		meters: React.PropTypes.array.isRequired
	}

	static defaultProps = {
		meters: [{
			value: "20%",
			name: "Newbie"
		}, {
			value: "30%",
			name: "Intermediate"
		}, {
			value: "35%",
			name: "Good"
		}, {
			value: "15%",
			name: "Guru"
		}]
	}

	render() {

		var meters = this.props.meters.map(function(meter){
			return  (
				<div style={ {"width": meter.value} } className="meter meter-left">
					<span className="meter-text">{ meter.name }</span>
			    </div>
			);
		})

		return (

			<div className = "progress-meter">{ meters }</div>
		);

	}
}

export default ProgressMeter;