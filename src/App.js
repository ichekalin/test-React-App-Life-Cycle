import React, {Component} from 'react';
import './App.css';
import CarComponent from "./components/Car/CarComponent";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cars: [
				{name: 'Audi', year: '2020'},
				{name: 'Toyota', year: '2019'},
				{name: 'ZAZ', year: '1968'}
			],
			pageTitle: 'React Component',
			showCars: false
		}

	}



	onChangeName = (name, index) => {
		const car = this.state.cars[index] //
		car.name = name
		const cars = [...this.state.cars] //спред оператор разворачивает массив, записывая его в cars. При кадом изменении инпута, будет меняться состояние cars.name
		cars[index] = car
		this.setState({
			cars: cars
		})
	}
	toggleCarsHandler = () => {
		this.setState({
			showCars: !this.state.showCars
		})
	}
	//стрелочная функция не создает свой собственный контекст(this), поэтому внутри нее, можно пользоваться контекстов компонента. Обращаться к нему через - this
	//обычные функции (ниже), создают свой собственный контекст. Который нужно забиндить к элементу, в котором вызывается эта функция
	//без bind(this), внутри этой функции НЕЛЬЗЯ обращаться в контексту - this
	deleteHandler(index) {
		const cars = this.state.cars.concat()
		cars.splice(index, 1)

		this.setState({cars})
	}

	componentWillMount() {
	}
	componentDidMount() {
	}

	render() {
		let cars = null

		if (this.state.showCars) {
			cars = this.state.cars.map((car, index) => {
				return (
					<CarComponent
						key={index}
						name={car.name}
						year={car.year}
						onDelete={this.deleteHandler.bind(this, index)}
						onChangeName={event => this.onChangeName(event.target.value, index)}
					/>
				)
			})
		}

		return (
			<div className="App">
				{/*<h1>{this.state.pageTitle}</h1>*/}
				<h1>{this.props.title}</h1>
				<button onClick={this.toggleCarsHandler}>Toggle cars</button>
				<div style={{
					width: '400px',
					margin: 'auto',
					paddingTop: '20px'
				}}>
					{cars}
				</div>

				{/*{this.state.showCars*/}
				{/*	? this.state.cars.map((car, index) => {*/}
				{/*	return (*/}
				{/*		<CarComponent*/}
				{/*			key={index}*/}
				{/*			name={car.name}*/}
				{/*			year={car.year}*/}
				{/*			onChangeTitle={() => this.changeTitleHandler(car.name)}*/}
				{/*		/>*/}
				{/*	)*/}
				{/*	}) : null*/}
				{/*}*/}
				{/*<CarComponent*/}
				{/*	name={cars[0].name}*/}
				{/*	year={cars[0].year}*/}
				{/*	onChangedTitle={this.changeTitleHandler.bind(this, cars[0].name)}*/}
				{/*/>*/}

			</div>
		);
	}
}

export default App;
