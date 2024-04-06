import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSideBarComponent } from './setting-side-bar.component';

describe('SettingSideBarComponent', () => {
  let component: SettingSideBarComponent;
  let fixture: ComponentFixture<SettingSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingSideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
