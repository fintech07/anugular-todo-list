import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] | undefined;

  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: true,
      },
      {
        content: 'Third todo',
        completed: false,
      },
    ];
  }

  toggleDone(id: number) {
    this.todos?.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos?.filter((v, i) => {
      return i !== id;
    });
  }

  addTodo() {
    if (this.inputTodo) {
      this.todos?.push({
        content: this.inputTodo,
        completed: false,
      });
    }
  }
}
