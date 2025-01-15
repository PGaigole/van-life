import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanDetailComponent } from './van-detail.component';

describe('VanDetailComponent', () => {
  let component: VanDetailComponent;
  let fixture: ComponentFixture<VanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VanDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
