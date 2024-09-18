import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkstrakulikulerComponent } from './ekstrakulikuler.component';

describe('EkstrakulikulerComponent', () => {
  let component: EkstrakulikulerComponent;
  let fixture: ComponentFixture<EkstrakulikulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EkstrakulikulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkstrakulikulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
