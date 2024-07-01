import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent 
{
  @Input() todo:Todo = {
    title: '',
    description: '',
    checked: false
  };
  constructor(public activeModal: NgbActiveModal){}

  @Output() sendTodo:EventEmitter<Todo> = new EventEmitter();
  onDelete(todo:Todo)
  {
    this.sendTodo.emit(todo);
    this.activeModal.close();
  }
}
