import { Component, OnInit } from "@angular/core";
import { ToastService } from "../Services/toastService";
@Component({
	selector: 'app-show-toast',
    template:`
        @for (toast of toastService.toasts; track toast) {
            <ngb-toast
                [class]="toast.classname",
                [delay]="toast.delay||1000",
                [autohide]="true"
                (hidden) = "toastService.remove(toast)"
                >
                <p>{{toast.template}}></p>
            </ngb-toast>
        }
    `,
	host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' }
})       
                      
export class ShowToast{

    constructor(public toastService:ToastService){
        console.log(this.toastService.toasts.length);
    }
  
}