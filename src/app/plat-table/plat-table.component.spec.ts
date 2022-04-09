import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatTableComponent } from './plat-table.component';

describe('PlatTableComponent', () => {
  let component: PlatTableComponent;
  let fixture: ComponentFixture<PlatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
