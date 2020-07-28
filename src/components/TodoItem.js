import React from 'react'
import PropTypes  from 'prop-types'

class TodoItem extends React.Component {

	getStyle = () => {
		return {
				background: '#f4f4f4',
				borderBottom: '1px dotted #ccc',
				padding: '10px',
				textDecoration: this.props.todo.completed 
					? 'line-through' 
					: 'none'
		}
	}

	render() {
		const { id, title } = this.props.todo

		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
					{title}
					<button style={btnStyle} onClick={this.props.deleteTodoItem.bind(this, id)} >X</button>
				</p>
			</div>
		)
	}
}

// propTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	deleteTodoItem: PropTypes.func.isRequired
}

const btnStyle = {
	background: 'red',
	color: 'white',
	border: 'none',
	padding: '5px 10px',
	borderRaduis: '50%',
	cursor: 'pointer',
	float: 'right'
}

export default TodoItem