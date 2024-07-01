import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowTodoComponent } from './Components/show-todo/show-todo.component';
import { HandleTodoComponent } from './Components/handle-todo/handle-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from './Components/delete-modal/delete-modal.component';
import { ShowToast } from './Components/showToast.component';
import { ObservableServiceService } from './Services/observable-service.service'; 
import { ToastService } from './Services/toastService';
import { filter } from 'rxjs';
import { ObservableTodosComponent } from './Components/observable-todos/observable-todos.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShowTodoComponent,
    HandleTodoComponent,
    AddTodoComponent,
    DeleteModalComponent,
    ShowToast,
    ObservableTodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
   ToastrModule,
  
  ],
  providers: [ToastService, NgbActiveModal, ObservableServiceService,HttpClient],         
  bootstrap: [AppComponent]
})
export class AppModule { }
