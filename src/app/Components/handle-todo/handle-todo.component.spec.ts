import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleTodoComponent } from './handle-todo.component';

describe('HandleTodoComponent', () => {
  let component: HandleTodoComponent;
  let fixture: ComponentFixture<HandleTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HandleTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandleTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
