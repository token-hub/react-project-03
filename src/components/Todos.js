import React from 'react'
import TodoItem from './TodoItem'
import PropType from 'prop-types'

class Todos extends React.Component {
	render() {

		const { todos } = this.props
		
		return todos.map( todo => (
			<TodoItem key={todo.id} todo={todo} />
		))
	}
}

Todos.PropType = {
	todos: PropType.array.isRequired
}

export default Todos