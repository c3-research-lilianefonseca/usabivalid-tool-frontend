import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsabivalidComponent } from './about-usabivalid.component';

describe('AboutUsabivalidComponent', () => {
  let component: AboutUsabivalidComponent;
  let fixture: ComponentFixture<AboutUsabivalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsabivalidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsabivalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
