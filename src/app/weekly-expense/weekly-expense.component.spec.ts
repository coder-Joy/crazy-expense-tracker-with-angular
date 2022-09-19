import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyExpenseComponent } from './weekly-expense.component';

describe('WeeklyExpenseComponent', () => {
  let component: WeeklyExpenseComponent;
  let fixture: ComponentFixture<WeeklyExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyExpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
