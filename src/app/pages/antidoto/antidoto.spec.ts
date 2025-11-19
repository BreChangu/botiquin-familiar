import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Antidoto } from './antidoto';

describe('Antidoto', () => {
  let component: Antidoto;
  let fixture: ComponentFixture<Antidoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Antidoto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Antidoto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
