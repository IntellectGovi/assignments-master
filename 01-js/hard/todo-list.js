/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor() {
        this.todos = []; // Ensure this.todos is an array
    }
    add(todo) {
        this.todos.push(todo); // Add new todo to the array
    }
    remove(index) {
        // if (typeof index !== 'number' || index < 0 || index >= this.todos.length) {
        //     throw new Error("Invalid index");
        // }
        this.todos.splice(index, 1); // Remove one element at the given index
    }
    update(index, updatedTodo) {
        if (typeof index !== 'number' || index < 0 || index >= this.todos.length) {
            throw new Error("Invalid index");
        }
        this.todos[index] = updatedTodo; // Update the todo at the given index
    }
    getAll() {
        return this.todos.slice(); // Return a copy of the todos array
    }

    get(index) {
        // if (typeof index !== 'number' || index < 0 || index >= this.todos.length) {
        //     throw new Error("Invalid index");
        // }
        return this.todos[index]; // Return the todo at the given index
    }
    clear() {
        this.todos = [];
    }

}

module.exports = Todo;
