import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable()
export class AppService {

  todosUrl = environment.apiBase + 'todos';
  itemsUrl = this.todosUrl + '/items';

  constructor(private httpClient: HttpClient) {}

  getTodos() {
    return this.httpClient.get(this.todosUrl);
  }

  createTodo(todoTitle) {
    return this.httpClient.post(this.todosUrl, {'title': todoTitle, 'created_by': 'Saverio'})
  }

  createItem(itemName, todoId) {
    return this.httpClient.post(this.itemsUrl, {'name': itemName, 'done': false, 'todo_id': todoId})
  }

  updateItem(item) {
    return this.httpClient.put(this.itemsUrl, item);
  }

  updateTodo(todo) {
    return this.httpClient.put(this.todosUrl, todo);
  }

  deleteItem(item) {
    return this.httpClient.delete(this.itemsUrl, {params: item});
  }

  deleteTodo(todoId) {
    return this.httpClient.delete(this.todosUrl, {params: {'id': todoId}});
  }

  getItems(todoId) {
    return this.httpClient.get(this.itemsUrl, {params: {'todo_id': todoId}});
  }

}
