import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultGraphsPanelComponent } from './result-graphs-panel.component';

describe('ResultGraphsPanelComponent', () => {
  let component: ResultGraphsPanelComponent;
  let fixture: ComponentFixture<ResultGraphsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultGraphsPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultGraphsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
