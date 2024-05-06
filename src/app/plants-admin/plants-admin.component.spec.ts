import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsAdminComponent } from './plants-admin.component';

describe('PlantsAdminComponent', () => {
  let component: PlantsAdminComponent;
  let fixture: ComponentFixture<PlantsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantsAdminComponent]
    });
    fixture = TestBed.createComponent(PlantsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
