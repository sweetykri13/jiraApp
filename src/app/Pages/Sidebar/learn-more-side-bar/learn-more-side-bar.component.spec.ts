import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LearnMoreSideBarComponent } from './learn-more-side-bar.component';

describe('LearnMoreSideBarComponent', () => {
  let component: LearnMoreSideBarComponent;
  let fixture: ComponentFixture<LearnMoreSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnMoreSideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnMoreSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
