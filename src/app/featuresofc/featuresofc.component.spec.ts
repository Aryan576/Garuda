import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesofcComponent } from './featuresofc.component';

describe('FeaturesofcComponent', () => {
  let component: FeaturesofcComponent;
  let fixture: ComponentFixture<FeaturesofcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesofcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesofcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
