import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends React.Component {

	render() {

		const { todos, markComplete, deleteTodoItem } = this.props
		
		return todos.map( todo => (
			<TodoItem key={todo.id} todo={todo} markComplete={markComplete} deleteTodoItem={deleteTodoItem} />
		))
	}
}

// propTypes
Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	deleteTodoItem: PropTypes.func.isRequired,
	markComplete: PropTypes.func.isRequired
}

export default Todos