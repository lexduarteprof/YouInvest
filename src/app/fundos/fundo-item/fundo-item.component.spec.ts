import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoItemComponent } from './fundo-item.component';

describe('FundoItemComponent', () => {
  let component: FundoItemComponent;
  let fixture: ComponentFixture<FundoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
