import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';
import { Todo } from './Todo';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[HttpClient]
})
export class AppComponent {
  title = 'mytodos';
  todo:Todo={
    title: '',
    description: '',
    checked: false
  };
 constructor(private modalService:NgbModal){}

 openAddTodo()
 {
    const modalRef = this.modalService.open(AddTodoComponent);
    modalRef.componentInstance
 }
}
