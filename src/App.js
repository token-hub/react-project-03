import React from 'react';
import Todos from './components/Todos'
import './App.css';


export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todo: [
                {
                    id: 1,
                    'title': 'take out the trash',
                    completed: false
                },
                {
                    id: 2,
                    'title': 'give jerry a cheese',
                    completed: false
                },
                {
                    id: 3,
                    'title': 'give tom a fish',
                    completed: false
                }
            ]
        }
    }

    render() {


        return (
            <div className="App">
                <Todos todos={this.state.todo} />
            </div>
        )
    }
}

export default App


