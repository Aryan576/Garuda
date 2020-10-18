import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyCComponent } from './why-c.component';

describe('WhyCComponent', () => {
  let component: WhyCComponent;
  let fixture: ComponentFixture<WhyCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
