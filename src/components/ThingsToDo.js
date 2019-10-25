import React, {Component} from 'react';

class ThingsToDo extends Component {
  render (props) {
    return (
        <div>
            <p>{props.todolist.task}</p>
        </div>
    );
  }
}

export default ThingsToDo;