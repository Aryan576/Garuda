import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistroyofcComponent } from './histroyofc.component';

describe('HistroyofcComponent', () => {
  let component: HistroyofcComponent;
  let fixture: ComponentFixture<HistroyofcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistroyofcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistroyofcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
