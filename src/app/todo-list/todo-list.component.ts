import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public todos = [];
  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.findAllTodos();
  }

  findAllTodos() {
    this.todosService.findAllTodos().subscribe((res) => {
      this.todos = res;
    });
  }
  updateToDo(id) {
    this.todosService.updateTodo(id, { status: false });
  }
}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-todo-list',
//   templateUrl: './todo-list.component.html',
//   styleUrls: ['./todo-list.component.css']
// })
// export class TodoListComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
