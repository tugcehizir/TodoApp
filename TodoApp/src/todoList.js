import React, { Component } from "react";
import Todo from "./todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  create(newTodo) {
    //Oluşturulacak mı?
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  remove(id) {
    //Silinecek mi?
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id) //Id'si silinecek task'ın Id'si ile eşit olan hariç hepsi state'e tekrar kaydedilir.
    });
  }

  update(id, updatedTask) {
    //Güncellenecek mi?
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }
  toggleCompletion(id) {
    //Yapıldı Mı?
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }
  render() {
    const todos = this.state.todos.map(todo => {
      //state'te bulunan öğe kadar döndür.
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          removeTodo={this.remove}
          updateTodo={this.update}
          completed={todo.completed}
          toggleTodo={this.toggleCompletion}
        />
      ); //Todo'ya props olarak gönder ve ekrana yaz!
    });
    return (
      <div>
        <h1>TO DO LIST</h1>
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}
export default TodoList;
