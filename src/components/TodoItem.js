import React from 'react'

class TodoItem extends React.Component {
	render() {

		const { todo } = this.props

		return (
			<div>
				<p>{todo.title}</p>
			</div>
		)
	}
}

export default TodoItem