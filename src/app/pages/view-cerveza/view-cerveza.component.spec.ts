import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCervezaComponent } from './view-cerveza.component';

describe('ViewCervezaComponent', () => {
  let component: ViewCervezaComponent;
  let fixture: ComponentFixture<ViewCervezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCervezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCervezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
