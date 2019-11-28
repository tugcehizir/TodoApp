import React, { Component } from "react";
import uuid from "uuid/v4";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    //todoList componentinden yollanan props burada tutulur ve state'e kaydedilir!
    event.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({
      task: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="task" />
          <input
            type="text"
            placeholder="New Todo"
            id="task"
            name="task"
            value={this.props.task}
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
export default NewTodoForm;
