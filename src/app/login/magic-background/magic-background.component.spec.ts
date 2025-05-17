import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicBackgroundComponent } from './magic-background.component';

describe('MagicBackgroundComponent', () => {
  let component: MagicBackgroundComponent;
  let fixture: ComponentFixture<MagicBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
