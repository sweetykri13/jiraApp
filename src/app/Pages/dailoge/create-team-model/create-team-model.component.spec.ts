import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeamModelComponent } from './create-team-model.component';

describe('CreateTeamModelComponent', () => {
  let component: CreateTeamModelComponent;
  let fixture: ComponentFixture<CreateTeamModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTeamModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTeamModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
