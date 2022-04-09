import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeRestaurantTableComponent } from './commande-restaurant-table.component';

describe('CommandeRestaurantTableComponent', () => {
  let component: CommandeRestaurantTableComponent;
  let fixture: ComponentFixture<CommandeRestaurantTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeRestaurantTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeRestaurantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
