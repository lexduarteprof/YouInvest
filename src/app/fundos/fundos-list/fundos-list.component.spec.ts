import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundosListComponent } from './fundos-list.component';

describe('FundosListComponent', () => {
  let component: FundosListComponent;
  let fixture: ComponentFixture<FundosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
