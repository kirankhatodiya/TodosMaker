import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrl: './show-todo.component.css'
})
export class ShowTodoComponent implements OnInit {

  title: string = '';
  description: string = '';
  checked: boolean = true;
  searchTodos: Todo[] = [];
  pageSize: number = 6;
  _search: string = '';
  page: number = 1;
  checkTask = { 'showDone': false, 'showUndone': false }        
  @Input() todos: Todo[] = [];
  @Input() set search(val: string) {
    this._search = val;
    this.searchTodos = this.searchTasks(val);

  }
  @Output() checkClicked: EventEmitter<Todo> = new EventEmitter();
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();


  constructor(private modalService: NgbModal) { }
  ngOnInit(): void {
    this.searchTodos = this.todos;
  }

  onDelete(todo: Todo) {
    this.todoDelete.emit(todo);
  }

  checkChanged(todo: Todo) {
    this.checkClicked.emit(todo);
  }

  openDelModal(todo: Todo) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.todo = todo;
    modalRef.componentInstance.sendTodo.subscribe((todo: Todo) => {
      this.onDelete(todo);
    });
  }

  searchTasks(searchQuery: string) {
    if (searchQuery === '' || this.todos.length === 0) {
      return this.todos;
    }
    else {
      return this.todos.filter(
        (todo) => (todo.title.toLowerCase() === searchQuery.trim().toLowerCase())
      );  
    }      
  }
  filterTaskByCheck() {
    this.searchTodos = this.todos.filter(
      (todo) => (todo.checked && this.checkTask.showDone) ||
      (!todo.checked && this.checkTask.showUndone)||   
      (!this.checkTask.showDone && !this.checkTask.showUndone)
    )
  }
}
