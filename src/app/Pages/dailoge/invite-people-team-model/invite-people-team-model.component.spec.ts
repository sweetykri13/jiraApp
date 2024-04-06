import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitePeopleTeamModelComponent } from './invite-people-team-model.component';

describe('InvitePeopleTeamModelComponent', () => {
  let component: InvitePeopleTeamModelComponent;
  let fixture: ComponentFixture<InvitePeopleTeamModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvitePeopleTeamModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvitePeopleTeamModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
