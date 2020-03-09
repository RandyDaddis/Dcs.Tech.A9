import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTopNavComponent } from './public-top-nav.component';

describe('PublicTopNavComponent', () => {
  let component: PublicTopNavComponent;
  let fixture: ComponentFixture<PublicTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
