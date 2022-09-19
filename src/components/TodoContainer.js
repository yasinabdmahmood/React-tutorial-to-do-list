import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import InputTodo from './InputTodo';
import Header from './Header';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

       handleChange = (id) => {
         this.setState((prevState) => ({
           todos: prevState.todos.map((todo) => {
             if (todo.id === id) {
               return {
                 ...todo,
                 completed: !todo.completed,
               };
             }
             return todo;
           }),
         }));
       };

          delTodo = (id) => {
            this.setState((prev) => (
              {
                todos: [
                  ...prev.todos.filter((todo) => todo.id !== id),
                ],
              }
            ));
          };

          addTodoItem = (title) => {
            const newTodo = {
              id: uuidv4(),
              title,
              completed: false,
            };
            this.setState((prev) => (
              {
                todos: [...prev.todos, newTodo],
              }
            ));
          };

          setUpdate = (updatedTitle, id) => {
            this.setState((prev) => (
              {
                todos: prev.todos.map((todo) => {
                  if (todo.id === id) {
                    return { ...todo, title: updatedTitle };
                  }

                  return todo;
                }),
              }
            ));
          }

          render() {
            const { todos } = this.state;
            return (
              <div className="container">
                <div className="inner">
                  <Header />
                  <InputTodo addTodoProps={this.addTodoItem} />
                  <TodosList
                    todos={todos}
                    handleChangeProps={this.handleChange}
                    deleteTodoProps={this.delTodo}
                    setUpdate={this.setUpdate}
                  />
                </div>
              </div>
            );
          }
}
export default TodoContainer;
