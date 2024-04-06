import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectModelComponent } from './create-project-model.component';

describe('CreateProjectModelComponent', () => {
  let component: CreateProjectModelComponent;
  let fixture: ComponentFixture<CreateProjectModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProjectModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateProjectModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
