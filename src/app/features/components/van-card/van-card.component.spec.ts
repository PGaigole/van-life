import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanCardComponent } from './van-card.component';

describe('VanCardComponent', () => {
  let component: VanCardComponent;
  let fixture: ComponentFixture<VanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VanCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
