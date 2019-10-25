import React, {Component} from 'react';

import './App.css';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    thingstodo: [
    {
      id: 1,
      taskname: 'Number 1',
      status: false
    },

      {
        id: 2,
        taskname: 'Number 2',
        status: false
      },

     {
          id: 3,
          taskname: 'Number 3',
          status: false
      }
  
    ]
  }


  render () {
    return (
    <React.Fragment>
    <h2>hi</h2>
    
    </React.Fragment>
  );
  }
}

export default App;