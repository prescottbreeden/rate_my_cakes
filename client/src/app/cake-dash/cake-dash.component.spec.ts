
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDashComponent } from './cake-dash.component';

describe('CakeDashComponent', () => {
  let component: CakeDashComponent;
  let fixture: ComponentFixture<CakeDashComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
