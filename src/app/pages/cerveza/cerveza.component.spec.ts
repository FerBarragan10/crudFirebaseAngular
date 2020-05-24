import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervezaComponent } from './cerveza.component';

describe('CervezaComponent', () => {
  let component: CervezaComponent;
  let fixture: ComponentFixture<CervezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CervezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
