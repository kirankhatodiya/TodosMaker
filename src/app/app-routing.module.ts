import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';
import { ObservableTodosComponent } from './Components/observable-todos/observable-todos.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent,
    children:[
      {
        path:'observable-todos',
        loadComponent:() => import('./Components/observable-todos/observable-todos.component').then
        ((m1)=>m1.ObservableTodosComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
