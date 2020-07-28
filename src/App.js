import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import './App.css';
import Header from './layouts/Header';
import AddTodo from './components/AddTodo';
import About from './pages/About';
import Axios from 'axios';

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // todos: [
            //     {
            //         id: 1,
            //         title: 'take out the trash',
            //         completed: false
            //     },
            //     {
            //         id: 2,
            //         title: 'give jerry a cheese',
            //         completed: true
            //     },
            //     {
            //         id: 3,
            //         title: 'give tom a fish',
            //         completed: false
            //     }
            // ]
            todos: []
        }
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then( response => {
            this.setState({
                todos: response.data
            })
        } )
        .catch( error => console.log(error) )
    }

    // Toogle complete
    markComplete = id => {
       this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                   todo.completed = !todo.completed; 
                }
                return todo;
            })
       })
    }

    // Delete Todo Item
    deleteTodoItem = id => {
        Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then( response => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
    }

    // Add todo Item
    addTodo = title => {
        Axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
        .then( res => this.setState({ todos: [...this.state.todos, res.data] }) )

    }

    render() {
        const { todos } = this.state;
        return (
            <Router>
                <div className="App">
                    <div className="container">
                         <Header />
                         <Route exact path="/" render={props => (
                            <React.Fragment>
                                 <AddTodo addTodo={this.addTodo}/>
                                 <Todos todos={todos} markComplete={this.markComplete} deleteTodoItem={this.deleteTodoItem}/>
                            </React.Fragment>
                            )} />

                          <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        )
    }
}

export default App


