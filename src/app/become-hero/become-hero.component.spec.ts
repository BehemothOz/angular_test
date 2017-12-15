import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeHeroComponent } from './become-hero.component';

describe('BecomeHeroComponent', () => {
  let component: BecomeHeroComponent;
  let fixture: ComponentFixture<BecomeHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
