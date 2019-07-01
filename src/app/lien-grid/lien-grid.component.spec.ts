import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LienGridComponent } from './lien-grid.component';

describe('LienGridComponent', () => {
  let component: LienGridComponent;
  let fixture: ComponentFixture<LienGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LienGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LienGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
