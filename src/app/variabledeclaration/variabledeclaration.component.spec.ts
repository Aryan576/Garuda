import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariabledeclarationComponent } from './variabledeclaration.component';

describe('VariabledeclarationComponent', () => {
  let component: VariabledeclarationComponent;
  let fixture: ComponentFixture<VariabledeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariabledeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariabledeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
