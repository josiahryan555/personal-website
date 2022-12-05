import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjInfoPageComponent } from './proj-info-page.component';

describe('ProjInfoPageComponent', () => {
  let component: ProjInfoPageComponent;
  let fixture: ComponentFixture<ProjInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjInfoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
