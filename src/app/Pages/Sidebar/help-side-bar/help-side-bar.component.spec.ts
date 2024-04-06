import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpSideBarComponent } from './help-side-bar.component';

describe('HelpSideBarComponent', () => {
  let component: HelpSideBarComponent;
  let fixture: ComponentFixture<HelpSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpSideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
