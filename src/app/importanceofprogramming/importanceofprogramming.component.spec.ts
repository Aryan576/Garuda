import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportanceofprogrammingComponent } from './importanceofprogramming.component';

describe('ImportanceofprogrammingComponent', () => {
  let component: ImportanceofprogrammingComponent;
  let fixture: ComponentFixture<ImportanceofprogrammingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportanceofprogrammingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportanceofprogrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
