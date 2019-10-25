import React, {Component} from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todolist: [
    {
      id: 1,
      title: 'Number 1',
      completed: false
    },

      {
        id: 2,
        title: 'Number 2',
        completed: false
      },

     {
          id: 3,
          title: 'Number 3',
          completed: false
      }
  
    ]
  }


  render () {
    console.log(this.state.todolist);
    return (
    <div>
        <Todos />
    </div>
  );
  }
}

export default App;