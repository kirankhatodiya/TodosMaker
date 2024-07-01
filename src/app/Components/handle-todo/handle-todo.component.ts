import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../Services/toastService';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-handle-todo',
  templateUrl: './handle-todo.component.html',
  styleUrl: './handle-todo.component.css'
})
export class HandleTodoComponent {

 
  search:string='';
openAddTodo() {
  const modalRef = this.modalService.open(AddTodoComponent);
  modalRef.componentInstance.todoAdd.subscribe(
    (todo:Todo) => this.addTodo(todo)
  );
}

  todos: Todo[] = [];
  storedTodos: string = '';
  newTodo: string = '';
  constructor(private toastService:ToastService, private modalService:NgbModal) {
    this.todos = JSON.parse(localStorage.getItem("todos") || '[]');
    if (this.todos.length == 0) {
      this.todos = [];
    }
  }

  addTodo(newTodo: Todo) {
    this.newTodo = newTodo.title;
    console.log(newTodo);
    if (newTodo.title != '') {
      this.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(this.todos));
      console.log("Todo added");
     // this.toastService.show({ template: 'Task added:)' })
    }
  }
  include(todos: Todo[], todo: Todo) {
    return (todos.indexOf(todo) != -1);
  }
  deleteTodo(todo: Todo) {
    if (this.include(this.todos, todo)) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      console.log("Deleted successfully");
      localStorage.setItem("todos", JSON.stringify(this.todos));
      //this.toastService.delete({ template: 'Task removed', classname: 'bg-danger text-light', delay: 6000 });
    }


  }

  changeChecked(todo: Todo) {
    this.todos[this.todos.indexOf(todo)].checked = !this.todos[this.todos.indexOf(todo)].checked;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
