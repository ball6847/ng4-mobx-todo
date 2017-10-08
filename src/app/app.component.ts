import { Component, ChangeDetectionStrategy } from '@angular/core';
import {Todo, TodoDataService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  // newTodo: Todo = new Todo();
  title = '';

  constructor(private todoDataService: TodoDataService) {
  }

  addTodo(title) {
    const todo = new Todo({ title });
    this.todoDataService.addTodo(todo);
    this.title = '';
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}
