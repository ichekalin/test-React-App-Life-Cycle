import React, {Component} from "react";
// import Radium from "radium";
import './CarComponent.css';

class CarComponent extends Component{

	componentWillReceiveProps(nextProps, nextContext) {
		console.log('componentWillReceiveProps', nextProps)
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('shouldComponentUpdate', nextProps, nextState)
		return nextProps.name.trim() !== this.props.name.trim()
	}

	componentWillUpdate(nextProps, nextState, nextContext) {
		console.log('componentWillUpdate', nextProps, nextState)
	}

	componentDidUpdate() {
		console.log('componentDidUpdate')
	}
	static getDerivedStateFromProps(nextProps, prevState){
		console.log('getDerivedStateFromProps', nextProps, prevState)
		return prevState

	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('getSnapshotBeforeUpdate')
	}

	componentWillUnmount() {
		console.log('componentWillUnmount')
	}

	render() {
		console.log('render')
		const inputClasses = ['input']
		if (this.props.name !== '') {
			inputClasses.push('green')
		} else {
			inputClasses.push('red')
		}

		if (this.props.name.length > 4) {
			inputClasses.push('bold')
		}

		const style = {
			border: '1px solid purple',
			boxShadow: '10px 4px 5px 0 rgba(0,0,0, .14)',
			':hover': {
				border: '1px solid brown',
				boxShadow: '10px 4px 15px 0 rgba(0,0,0, .50)',
			}

		}

		return (
			<div className='CarComponent' style={style}>
				<h1>Car: {this.props.name}</h1>
				<h2>Year: {this.props.year}</h2>
				<input type="text"
					   onChange={this.props.onChangeName}
					   value={this.props.name}
					   className={inputClasses.join(' ')}
				/>
				<button onClick={this.props.onDelete}>Delete</button>
			</div>
		)
	}
}


export default CarComponent;