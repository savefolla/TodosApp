import {Component} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos;
  updatableTodo = [];
  newTodoInput = false;
  newItemInput = [];

  constructor(private appService: AppService) {
    this.getTodos();
  }

  newTodo() {
    this.newTodoInput = !this.newTodoInput;
  }

  newItem(index) {
    this.newItemInput[index] = !this.newItemInput[index];
  }

  addTodo(value) {
    this.appService.createTodo(value).subscribe(
      res => {
        this.newTodoInput = false;
        this.getTodos()
      },
          error => console.error(error)
    )
  }

  panelClosed(index) {
    this.updatableTodo[index] = false;
    this.newItemInput[index] = false;
  }

  updateTodo(index) {
    this.updatableTodo[index] = !this.updatableTodo[index];
  }

  saveTodo(todo, index) {
    this.appService.updateTodo(todo).subscribe(
      res => {
        this.getTodos();
        this.updatableTodo[index] = false;
      },
          error => console.error(error)
    )

  }

  addItem(value, todoId) {
    this.appService.createItem(value, todoId).subscribe(
      res => {
        this.fetchItems(todoId);
        this.newItemInput = false;
      },
          error => console.error(error)
    )
  }

  itemChanged(item) {
    item.done = !item.done;
    this.appService.updateItem(item).subscribe(
      res => this.fetchItems(item.todo_id),
      error => console.error(error)
    )
  }

  deleteItem(item) {
    this.appService.deleteItem(item).subscribe(
      res => this.fetchItems(item.todo_id),
      error => console.error(error)
    )
  }

  getTodos() {
    this.appService.getTodos().subscribe(
      res => {
        this.todos = res;
        this.updatableTodo = [];
        this.newItemInput = [];
        this.todos.forEach(() => {
          this.updatableTodo.push(false);
          this.newItemInput.push(false)
        })
      }
    )
  }

  fetchItems(todoId) {
    this.appService.getItems(todoId).subscribe(
      res => this.todos.find(el => el.id === todoId)['items'] = res
    )
  }

  deleteTodo(todo) {
    this.appService.deleteTodo(todo.id).subscribe(
      res => this.getTodos(),
      error => console.error(error)
    )
  }
}
