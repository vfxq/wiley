import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      newTaskTitle: null,
      tasks: []
    }
  }

  handleChange = (event) => {
    this.setState({
      newTaskTitle: event.target.value
    });
  }

  addTaskHandle = () => {
    const task = {
      title: this.state.newTaskTitle, 
      id: uuidv1()
    };
    
    this.setState({ 
      tasks: [...this.state.tasks, task]
    });
  }

  render() {
    const body = this.state.tasks.length > 0 
      ?
        <ul>
          {
            this.state.tasks.map(item => 
              <li key={item.id}>
               {item.title}
              </li>
            )
          }
        </ul> 
      : null

    return (
      <div className="App">
        <h1>ToDo   list</h1>
        <input type="text" value={this.state.newTatsTitle} onChange={this.handleChange}/>
        <button onClick={this.addTaskHandle}>Add task</button> 
        {body}
      </div>
    );
  }
}

export default App;
