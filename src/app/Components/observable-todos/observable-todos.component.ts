import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/userModel';
import { ObservableServiceService } from '../../Services/observable-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-todos',
  templateUrl: './observable-todos.component.html',
  styleUrl: './observable-todos.component.css',
  providers:[ObservableServiceService]
})
export class ObservableTodosComponent implements OnInit {
  users: User[] = [];

  /*getUsers()
  {
    this.observableService.sendUsers().subscribe(
      userData => this.users = userData
    );
  }*/
  constructor(private observableService: ObservableServiceService) { }
  ngOnInit(): void {
    this.myobservable.subscribe(
      (val) => {
        console.log(val);

      }
    );
  }


  myobservable = new Observable(
    (observer) => {
      observer.next('1'),
        observer.next('2'),
        observer.next('3'),
        observer.next('4'),
        observer.next('5')

    }
  )




}
