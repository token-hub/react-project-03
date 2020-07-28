import React from 'react'
import PropTypes from 'prop-types'
class AddTodo extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			title: ''
		}
	}

	changeTitleHandler = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	onSubmit = event => {
		event.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ 
			title: ''
		})
	}

	render() {
		return (
			<form action="" style={{ display: 'flex' }}  onSubmit={this.onSubmit}>
				<input type="text" name="title" id="" value={this.state.title} onChange={this.changeTitleHandler} placeholder="add todo ..." style={{ flex: '9', padding: '5px' }}/>
				<button type='submit' className='btn' style={{flex: '1'}} > Submit </button>
			</form>
		)
	}
}

// propTypes
AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired,
}


export default AddTodo