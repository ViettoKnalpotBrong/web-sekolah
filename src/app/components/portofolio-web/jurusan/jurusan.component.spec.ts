import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurusanComponent } from './jurusan.component';

describe('JurusanComponent', () => {
  let component: JurusanComponent;
  let fixture: ComponentFixture<JurusanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JurusanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JurusanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
