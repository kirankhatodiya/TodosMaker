import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgbActiveModal, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit{

  title: string = '';
  description: string = '';
  checked: boolean = false;
  submitted:boolean=false;

  group1!: FormGroup;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  

  constructor(private formBuilder: FormBuilder, public activeModal:NgbActiveModal) {
    this.group1 = this.formBuilder.group({
      title:['', Validators.required],
      description:['', Validators.required]
    });
  }
  addTodo() {
    this.submitted=true;
    const newTodo = {
      title: this.title.trim(),
      description: this.description.trim(),
      checked: this.checked
    }
    console.log(newTodo);
    this.title='';
    this.description='';
    this.todoAdd.emit(newTodo);
    console.log(this.title);
  }
             
  get f()                          
  {
    return this.group1.controls;
  }
  ngOnInit(): void {
    
  }   
}
      