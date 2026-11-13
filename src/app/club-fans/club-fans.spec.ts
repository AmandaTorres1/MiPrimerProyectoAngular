import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubFans } from './club-fans';

describe('ClubFans', () => {
  let component: ClubFans;
  let fixture: ComponentFixture<ClubFans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubFans],
    }).compileComponents();

    fixture = TestBed.createComponent(ClubFans);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
