import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkstraComponent } from './ekstra.component';

describe('EkstraComponent', () => {
  let component: EkstraComponent;
  let fixture: ComponentFixture<EkstraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EkstraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkstraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
