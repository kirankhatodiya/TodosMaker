import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTodosComponent } from './observable-todos.component';

describe('ObservableTodosComponent', () => {
  let component: ObservableTodosComponent;
  let fixture: ComponentFixture<ObservableTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObservableTodosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
