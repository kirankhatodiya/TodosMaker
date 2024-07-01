import {Injectable, TemplateRef} from '@angular/core';

export interface Toast
{
    template:string
    classname?:string
    delay?:number
}

export class ToastService
{
    toasts:Toast[]=[];
    show(toast:Toast)
    {
        console.log(toast);
        this.toasts.push(toast);
    }

    include(toasts:Toast[], toast:Toast):boolean
    {
        return toasts.indexOf(toast) != -1;
    }
    remove(toast:Toast)
    {
        console.log("removed toast");
        if(this.include(this.toasts, toast))
        {
            const index = this.toasts.indexOf(toast);
            this.toasts.splice(index,1);
        }
    }
    delete(toast:Toast)
    {
        this.toasts.push(toast);
    }
}